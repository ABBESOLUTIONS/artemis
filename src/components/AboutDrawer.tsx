
import { Button, Drawer } from '@mui/material';

interface props {
  open: boolean,
  onClose?: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void
}

export default function AboutDrawer({open, onClose}: props) {

  const handleClose = (event: React.MouseEvent<HTMLElement>) =>{
    // onClose();
  }

  return (
    <div>
        <Drawer
          anchor={"right"}
          open={open}
          onClose={onClose}
          PaperProps={{
            sx:{
              width: {xs:1, sm: 0.5, md: 700}
            }
          }}
        >
          <Button onClick={handleClose}>X</Button>
          Hervette le pervers
        </Drawer>
    </div>
  );
}