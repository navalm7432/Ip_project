import React from "react";
import Header from "./Header";
// import Sidebar from "./Sidebar";
import Recommendedvideos from "./Recommendedvideos";
import Player from "./Player";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Iframe from "./Iframe";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="app_page">
              {/* <Sidebar className="sidebar" /> */}
              <Recommendedvideos />
            </div>
          </Route>

          <Route path="/search/:searchTerm">
            <div className="app_page">
              {/* <Sidebar className="sidebar" /> */}
              <SearchPage />
            </div>
          </Route>

          <Route path="/vid1">
            <Iframe id="r7qovpFAGrQ" />
            <Player
              id="r7qovpFAGrQ"
              channelImg="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s88-c-k-c0xffffffff-no-rj-mo"
            />
          </Route>

          <Route path="/vid2">
            <Iframe id="XmURf2dJ3Jk" />
            <Player
              id="XmURf2dJ3Jk"
              channelImg="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj"
            />
          </Route>
          <Route path="/vid3">
            <Iframe id="s0-f5RncxcA" />

            <Player
              id="s0-f5RncxcA"
              channelImg="https://yt3.ggpht.com/a/AATXAJxUv12-EJzlodXEA3qw2XJNDDz1n3Syh7h4SWBMDQ=s176-c-k-c0x00ffffff-no-rj-mo"
            />
          </Route>

          <Route path="/vid4">
            <Iframe id="ISORfez27og" />

            <Player
              id="ISORfez27og"
              channelImg="https://yt3.ggpht.com/a/AATXAJwQ9DOyZ4XEIAHnrUoaKgVn2VL5ryPukiL-VhU1sw=s88-c-k-c0xffffffff-no-rj-mo"
            />
          </Route>

          <Route path="/vid5">
            <Iframe id="qn6OhK_Irm4" />
            <Player
              id="qn6OhK_Irm4"
              channelImg="https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s88-c-k-c0xffffffff-no-rj-mo"
            />
          </Route>

          <Route path="/vid6">
            <Iframe id="F1qFB4n9K6Q" />

            <Player
              id="F1qFB4n9K6Q"
              channelImg="https://yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s176-c-k-c0x00ffffff-no-rj-mo"
            />
          </Route>

          <Route path="/vid7">
            <Iframe id="SlPhMPnQ58k" />

            <Player
              id="SlPhMPnQ58k"
              channelImg="https://yt3.ggpht.com/a/AATXAJyWTLsXdrfFcQphqsPdI9Eq12v6LS3fq8QJ-d71gg=s88-c-k-c0xffffffff-no-nd-rj-mo"
            />
          </Route>

          <Route path="/vid8">
            <Iframe id="_kUrW9SEaJc" />

            <Player
              id="_kUrW9SEaJc"
              channelImg="https://yt3.ggpht.com/a/AATXAJx0ZPHOGhiMfR80YTAEkGFvrdFSHJlc0yLfQJ7k=s176-c-k-c0x00ffffff-no-rj-mo"
            />
          </Route>

          <Route path="/vid9">
            <Iframe id="yHp54qEAFJE" />
            <Player
              id="yHp54qEAFJE"
              channelImg="https://yt3.ggpht.com/a/AATXAJz7zITRuxTnkuZKP-l5iLTE6NG1ZeHRd5yElrK5=s176-c-k-c0x00ffffff-no-rj-mo"
            />
          </Route>
          <Route path="/vid10">
            <Iframe id="JsPrc1-oNRU" />
            <Player
              id="JsPrc1-oNRU"
              channelImg="https://yt3.ggpht.com/a/AATXAJzrF8fynCKyOWqPa6RyGOmHWD5s2zy_yAlT1tdstw=s176-c-k-c0x00ffffff-no-rj-mo"
            />
          </Route>
          <Route path="/vid11">
            <Iframe id="p0bGHP-PXD4" />

            <Player
              id="p0bGHP-PXD4"
              channelImg="https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s88-c-k-c0xffffffff-no-rj-mo"
            />
          </Route>
          <Route path="/vid12">
            <Iframe id="_8gHHBlbziw" />
            <Player
              id="_8gHHBlbziw"
              channelImg="https://yt3.ggpht.com/a/AATXAJzj9Wp5NIzuIcB3DhQ5jgunW5b98DCWGeSv2TZptQ=s88-c-k-c0xffffffff-no-rj-mo"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
