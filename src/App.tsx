import "./components/Ui/Alert/index.scss";
import Alert from "./components/Alert";
import { Ban } from "lucide-react";

const App = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <Alert
        type={"alert-default"}
        icon={<Ban size={20} />}
        title="Something went wrong"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          ducimus deleniti, quam cupiditate quidem dolorem nesciunt ad officia
          quibusdam alias quisquam <a href="/">obcaecati</a> placeat laborum facilis perferendis
          inventore odit rem amet.
        </p>
      </Alert>

      <Alert
        type={"alert-warnin"}
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        voluptates minima cum dolor accusantium quae id voluptas debitis eaque.
        Qui eius sequi aut aperiam culpa optio dignissimos laudantium harum
        ducimus."
      />
      <Alert
        type={"alert-info"}
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        voluptates minima cum dolor accusantium quae id voluptas debitis eaque.
        Qui eius sequi aut aperiam culpa optio dignissimos laudantium harum
        ducimus."
      />
      <Alert
        type={"alert-error"}
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        voluptates minima cum dolor accusantium quae id voluptas debitis eaque.
        Qui eius sequi aut aperiam culpa optio dignissimos laudantium harum
        ducimus."
      />
      <Alert
        type={"alert-success"}
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        voluptates minima cum dolor accusantium quae id voluptas debitis eaque.
        Qui eius sequi aut aperiam culpa optio dignissimos laudantium harum
        ducimus."
      />
    </div>
  );
};

export default App;
