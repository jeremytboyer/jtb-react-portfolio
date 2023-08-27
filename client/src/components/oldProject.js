function Project(props) {
  return (
    <div className="col-md-4 hover">
      <div class="card" style="width: 18rem;">
        <img width="400px" height="250px" src={props.project.image} />
        <h1>{props.project.title}</h1>
        <p>{props.project.description}</p>
        <div className="flex space-between">
          <a
            href={props.project.liveUrl}
            className=" mr-2"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn mr-2 btn-dark">See It Live</button>
          </a>
          <a href={props.project.githubUrl} target="_blank" rel="noreferrer">
            <button className="btn btn-light">GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
