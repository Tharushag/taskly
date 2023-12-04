import IconButton from '@mui/material/IconButton';

function CustomIconButton({ children, disabled }) {
  return (
    <div className="relative z-10">
      <IconButton 
        disabled={disabled} 
        className="bg-[#282828] hover:bg-[#2F2F2F] p-2 rounded-xl flex items-center justify-center cursor-pointer"
      >
        {children}
      </IconButton>
    </div>
  )
}

export default CustomIconButton;
