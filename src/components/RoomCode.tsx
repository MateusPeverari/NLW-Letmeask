import copyImg from '../assets/images/copy.svg';

import '../style/roomCode.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" onClick={copyRoomCodeToClipboard} />
      </div>
      <span> Sala #{props.code}</span>
    </button>
  )
}