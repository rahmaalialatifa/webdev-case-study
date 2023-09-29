import { useCallback, useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Tracker from '@openreplay/tracker'; 

const tracker = new Tracker({
  projectKey: "q86Hxzs6ZYvDIqyBiHN6",
  ingestPoint: "https://openreplay.spacex79.xyz/ingest",
  __DISABLE_SECURE_MODE: true,
});

tracker.setUserID('rahma.alia.tif421@polban.ac.id');

const userMetadata = {
  userId: 'rahma.alia.tif421@polban.ac.id',
  username: 'rahmaalial',
  fullName: 'Rahma Alia Latifa',
  email: 'rahma.alia.tif421@polban.ac.id',
  location: 'Bandung, Indonesia',
};

for (const key in userMetadata) {
  tracker.setMetadata(key, userMetadata[key]);
}

function App() {
  const [comp, setComp] = useState(null);

  const handleClick = useCallback(() => {
    setComp({"something": "is wrong"})
  }, []);

  useEffect(() => {

    tracker.start();

    // Cleanup tracker when component unmounts
    return () => {
      tracker.stop();
    };
  }, []);

  return (
    <ErrorBoundary>
      <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={handleClick}>Do something that will cause an error</button>
        {comp}
      </div>
    </ErrorBoundary>
  );
}

export default App;

