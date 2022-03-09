import Card from "../Card/Card";
import "./card-list.styles.css";
import "./card.styles.css";
const CardList = (props) => {
  const {monsters} = props
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
export default CardList