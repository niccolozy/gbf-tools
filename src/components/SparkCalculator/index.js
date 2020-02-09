import React, { useState, useEffect } from "react";
import {
  Grid,
  Divider,
  Card,
  CardMedia,
  CardContent,
  TextField,
  CircularProgress,
  CardHeader,
  Typography
} from "@material-ui/core";
import crystalImg from "../../assets/crystal.jpg";
import singleTicketImg from "../../assets/signle-roll-ticket.jpg";
import tenRollTicketImg from "../../assets/10-roll-ticket.jpg";

export default function SparkCalculator(props) {
  const [crystal, setCrystal] = useState(0);
  const [singleRollTicket, setSingleRollTicket] = useState(0);
  const [tenRollTicket, setTenRollTicket] = useState(0);

  useEffect(() => {
    let state = JSON.parse(localStorage.getItem("SparkCalculator"));
    if (state !== null) {
      setCrystal(state.crystal);
      setSingleRollTicket(state.singleRollTicket);
      setTenRollTicket(state.tenRollTicket);
    }
  }, []);

  useEffect(() => {
    let state = {
      crystal: crystal,
      singleRollTicket: singleRollTicket,
      tenRollTicket: tenRollTicket
    };
    localStorage.setItem("SparkCalculator", JSON.stringify(state));
  }, [crystal, singleRollTicket, tenRollTicket]);

  let rolls = Math.floor(
    (crystal + 300 * singleRollTicket + 3000 * tenRollTicket) / 300
  );
  let progress = rolls / 300;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card style={{ display: "flex", padding: 10 }}>
          <CardMedia
            component="img"
            image={crystalImg}
            style={{ width: 86.776 }}
          />
          <CardContent>
            <TextField
              name="crystal"
              label="宝晶石"
              variant="standard"
              value={crystal}
              onChange={e => {
                setCrystal(Number(e.target.value));
              }}
            />
          </CardContent>

          <CardMedia
            component="img"
            image={singleTicketImg}
            style={{ width: 86.776 }}
          />
          <CardContent>
            <TextField
              name="crystal"
              label="单抽券"
              variant="standard"
              value={singleRollTicket}
              onChange={e => {
                setSingleRollTicket(Number(e.target.value));
              }}
            />
          </CardContent>

          <CardMedia
            component="img"
            image={tenRollTicketImg}
            style={{ width: 86.776 }}
          />
          <CardContent>
            <TextField
              name="crystal"
              label="10连券"
              variant="standard"
              value={tenRollTicket}
              onChange={e => {
                setTenRollTicket(Number(e.target.value));
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="攒井进度"
            titleTypographyProps={{ variant: "h5" }}
          />
          <Divider />
          <div style={{ padding: 10, display: "flex" }}>
            <CircularProgress
              variant="static"
              value={progress * 100 > 100 ? 100 : progress * 100}
              size={70}
            />
            <Typography variant="h5" style={{ margin: "auto" }}>
              {(progress * 100).toFixed(2) + "%"}
            </Typography>
            <Typography variant="h5" style={{ margin: "auto" }}>
              {rolls} / 300抽
            </Typography>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
