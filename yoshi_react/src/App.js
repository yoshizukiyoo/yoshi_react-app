function App() {
	return <h1>Hello</h1>;
}

export default App;

/*
JSX - 리액트에서 자체적으로 가상돔을 편하게 만들어주는 문법 체계
실제돔 - RealDOM
--실제 HTML태그를 이용해서 HTML구조를 만들면 브라우저 이를 해석해서 DOM이라는 객체형태로 브라우저에 출력

가상돔 - VirtualDOM
--실제 브라우저에 리얼돔으로 변환되기전 메모리상에서 DOM구조를 가상으로 만들어서 변경될 내용을 빠르게 비교
--비교완료후 변경되는 부분만 수정해서 리얼돔으로 출력하는 형태
*/
