import { useAddGoods } from '../../hooks/use-add-goods';

const Item = ({ id, name, description, price, full_background }) => {
  const [addGoods] = useAddGoods({ id, name, price });


  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={addGoods}>
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
};

export { Item };
