import React from 'react'
import "./Footer.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


function Footer() {
    return (
        <div className = "footer">
           <IconButton className="swipe__repeat">
        <ReplayIcon fontSize="Large" />
        </IconButton>

        <IconButton className="swipe__left">
        <CloseIcon fontSize="Large" />
        </IconButton>

        <IconButton className="swipe__star">
        <StarIcon fontSize="Large" />
        </IconButton>

        <IconButton className="swipe__right">
        <FavoriteIcon fontSize="Large" />
        </IconButton>

        <IconButton className="swipe__lightning">
        <FlashOnIcon fontSize="Large" />
        </IconButton>
        </div>
    )
}

export default Footer
