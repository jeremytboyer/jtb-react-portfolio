function Project(props) {
  return (
    <div className="col-md-4 mb-4 hover">
      <div className="card">
        <img
          width="400px"
          height="250px"
          src={props.project.image}
          className="card-img-top"
        />
        <div className="card-body">
          <h1 className="card-title">{props.project.title}</h1>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.project.technologies}
          </h6>
          <p>{props.project.description}</p>

          <a
            href={props.project.liveUrl}
            className="btn me-2 btn-dark"
            target="_blank"
            rel="noreferrer"
          >
            See It Live
          </a>
          <a
            className="btn ms-2 btn-light"
            href={props.project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
