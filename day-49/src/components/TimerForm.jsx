import { Grid, Card, Button, TextField, CardContent } from "@mui/material";

export default function TimerForm({ id, title, project }) {
  const submitText = id ? "Update" : "Create";
  return (
    <div>
      <h1>Timer form</h1>
      <Grid>
        <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder={title}
                    label={title}
                    variant={"outlined"}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder={project}
                    label={title}
                    variant={"outlined"}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button color={"success"} variant={"outlined"}>
                    {submitText}
                  </Button>
                  <Button color={"error"} variant={"outlined"}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
