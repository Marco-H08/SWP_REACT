type Props = {}

export default function Info({}: Props) {
  return (
    <div className="info">
        <div>Firstname: <p>Peter</p></div>
        <div>Lastname: <p>Parker</p></div>
        <div>Age: <p>25</p></div>
    </div>
  )
}