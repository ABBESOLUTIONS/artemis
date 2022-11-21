
import { Button, Drawer } from '@mui/material';

interface props {
  open: boolean,
  onClick:Function,
}

export default function AboutDrawer({open, onClick}: props) {

  return (
    <div>
        <Drawer
          anchor={"right"}
          open={open}
          PaperProps={{
            sx:{
              width: {xs:1, sm: 0.5, md: 700}
            }
          }}
        >
          <Button onClick={() => onClick()}>X</Button>
          Hervette le pervers
        </Drawer>
    </div>
  );
}