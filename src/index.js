import React from "react";
import { render } from "react-dom";
import { ParallaxProvider, Parallax } from "./react-skrollr";
import "./style.css";

const data = {
  "data-top-top": "transform: translateX(-100%);",
  "data-center-center": "opacity: 1;transform: translateX(0%);",
  "data-bottom-top": "opacity: 0;"
};

const App = () => (
  <ParallaxProvider
    init={{
      smoothScrollingDuration: 1000,
      smoothScrolling: true,
      forceHeight: false
    }}
    getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}
  >
    <div className="title">React Skrollr</div>

      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>

      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>
      <Parallax data={data}>
        <span>Start scrolling to see some magic happen {"\u2728"}</span>
      </Parallax>

  </ParallaxProvider>
);

render(<App />, document.getElementById("root"));
