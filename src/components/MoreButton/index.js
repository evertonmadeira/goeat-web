import React, { useState } from 'react';
import { MdMoreVert } from 'react-icons/md';

import { OptionButton } from './styles';

function MoreButton(props) {
  const [open, setOpen] = useState(false);

  return (
    <OptionButton
      href="#"
      onClick={
        () => setOpen(!open)
        // () => handleEject(table.register_id, table.num)
      }
    >
      <MdMoreVert size={24} style={{ color: '#424241' }} />

      {open && props.children}
    </OptionButton>
  );
}

export default MoreButton;
