# All about react routing using react-router-dom V6

## Step 1
```npm install react-router-dom```

## Step 2 Import code below in you App.js
```import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
```

## Step 3 Add below code to your return method

```
    <>
      <Router>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              caseSensitive={false}
              element={<LandingPage />}
            />
            <Route
              exact
              path="/individual"
              caseSensitive={false}
              element={<IndividualChat />}
            />
            <Route
              exact
              path="/all-chats"
              caseSensitive={false}
              element={<AllChats />}
            />
          </Routes>
        </div>
      </Router>
    </>
   ```
    
## Step 4 Use root like so

```
          <a
            className="btn btn-primary"
            variant="primary"
            type="submit"
            onClick={navigateToChat}
            href="all-chats/"
          >
            Submit
          </a>
          ```

🥷🥷 Enjoy and Happy Hacking 🥷🥷
