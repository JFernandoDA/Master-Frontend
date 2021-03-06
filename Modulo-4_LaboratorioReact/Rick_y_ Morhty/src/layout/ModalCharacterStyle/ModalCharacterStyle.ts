import { makeStyles } from '@material-ui/core/styles';

export const getModalStyle = () => {

    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    };
  }
  
export const useStyles = makeStyles((theme) => ({
    ModalCharacter: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));