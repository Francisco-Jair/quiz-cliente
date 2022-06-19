import { Toolbar, AppBar, Typography } from '@mui/material';
import { styled } from '@mui/system'


const useStyles = styled((theme) => ({
    root:{
        flexGrow: 1,
    },
    toolbarTitle:{
        flexGrow:1,
    }
}))

export default function Header(){
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar 
                position='static'
                color='default'
                elevation={0}
            >
                <Toolbar>
                    <Typography variant='h6' color="inherit" className={classes.toolbarTitle}>
                        Quizzes
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>    
    )
}