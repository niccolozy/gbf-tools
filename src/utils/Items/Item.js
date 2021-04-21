// const iconUrl = (id, type) => { return `http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/${type}/${id}.jpg`; };
const images = require.context("../../assets", true);

export const makeItem = (ingameId, name, type, {isCrafted=false, craftMaterials=null, isBuyable=false, exchangeMaterials=null} = {}) => {
  return { 
    id: ingameId,
    type: type, 
    name: name, 
    icon: ingameId === null ? null : images("./"+type+"/"+ingameId+".jpg"),
    isCrafted: isCrafted,
    craftMaterials: craftMaterials,
    isBuyable: isBuyable,
    exchangeMaterials: exchangeMaterials,
    
  };
};

export const makeMaterial = (item, quantity, priority = Number.MAX_SAFE_INTEGER) => {
  return {
    item: item, 
    quantity: quantity,
    priority: priority // for sorting
  };
};

const compareMaterial = (mat1, mat2) => {
  if(mat1.priority === mat2.priority) {
    return mat1.item.id - mat2.item.id;
  } else {
    return mat1.priority - mat2.priority;
  }
};

export const resolveMaterials = product => {
  if(!product.item.isCrafted)
    return [product];
  else {
    let list = [];
    product.item.craftMaterials.forEach(currentMat => {
      resolveMaterials(currentMat).forEach(newMat => {
        newMat.quantity *= product.quantity;
        let i = list.findIndex(storedMat => storedMat.item.name === newMat.item.name);
        if(i === -1)
          list.push(newMat);
        else
          list[i].quantity += newMat.quantity;
      });
    });
    list.sort(compareMaterial);
    return list;
  }
};