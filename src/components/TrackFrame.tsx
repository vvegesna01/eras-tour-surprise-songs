import { Track } from '../types/Track';

export const TrackFrame = (track: Track) => {
  const trackStyle = {
    backgroundColor: track.isPlayed ? (track.venue === 'SETLIST' ? 'lightgrey' : 'lightgreen') : 'white',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const playedIconStyle = {
    fontSize: '20px',
  };

  const venueStyle = {
    fontWeight: 'bold',
    marginTop: '4px',
  };

  const setlistVenueStyle = {
    color: '#888888',
  };

  const playedIcon = track.isPlayed ? (
    track.venue === 'SETLIST' ? (
      <i className="pi pi-star" style={playedIconStyle}></i>
    ) : (
      <i className="pi pi-check" style={playedIconStyle}></i>
    )
  ) : (
    <i className="pi pi-question" style={playedIconStyle}></i>
  );

  return (
    <div className={`track-frame ${(track.venue === 'SETLIST') ? 'opacity-80' : ''}`} style={trackStyle}>
      <div className="track-info">
        <div className="track-title" style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{track.title}</div>
        <div className="track-details">
          <span className={`venue ${(track.venue === 'SETLIST') ? 'setlist-venue' : ''}`} style={venueStyle}>
            <i className="pi pi-map"></i>
            {track.venue ? track.venue : '?'}
          </span>
        </div>
      </div>
      <div className="track-status p-3">
        <span className="status-icon">{playedIcon}</span>
      </div>
    </div>
  );
};
