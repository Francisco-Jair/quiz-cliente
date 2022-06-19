import React from "react";
import { styled } from '@mui/system'
import { Typography, Link, Box, Grid, Container } from '@mui/material';



const useStyles = styled((theme) => ({
    footer:{
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spancing(8),
        paddingTop: theme.spancing(3),
        paddingBottom: theme.spancing(3),
        [theme.breakpoints.up("sim")]:{
            paddingTop: theme.spancing(6),
            paddingBottom: theme.spancing(6),
        },

    },
}))


function Copyright(){
 return(
     <Typography variant="body2" color="textSecondary" align="center">
               {"Copyright © "}
         <Link color="inherit" href="#">
             Your site
         </Link>{" "}
         {new Date().getFullYear()}
         {"."}
     </Typography>
 )
}

const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];
  
  export default function Header() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        {/* Footer */}
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
        {/* End footer */}
      </React.Fragment>
    );
  }