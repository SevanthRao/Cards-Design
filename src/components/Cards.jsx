import "../App.css";

const Cards = (props) => {
  console.log(props.company);
  return (
    <div>
      <div className="cardbox">
        <div className="cards">
          <div className="top">
            <img src={props.logo} alt="" />
            <button>
              Save <img src=".\bookmark-line.svg" alt="" />
            </button>
          </div>

          <div className="center">
            <div className="company">
              <h3>
                {props.company}
                <span>5 days Ago</span>
              </h3>
            </div>
            <div className="post">
              <h2>{props.role}</h2>
              <div className="tags">
                <h4>{props.type}</h4>
                <h4>{props.level}</h4>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="left">
              <h3 className="pay">{props.salary}</h3>
              <h6 className="Location">{props.location}</h6>
            </div>
            <div className="right">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
