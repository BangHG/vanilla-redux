// 16.2.7 스토어 만들기
import { createStore } from 'redux';

// 16.2.3 DOM 레퍼런스 만들기
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 16.2.4 액션 타입과 액션 생성 함수 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCRESE = 'INCRESE';
const DECRESE = 'DECRESE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increse = (difference) => ({ type: INCRESE, difference });
const decrese = () => ({ type: DECRESE });

// 16.2.5 초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 16.2.6 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCRESE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECRESE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 16.2.7 스토어 만들기
const store = createStore(reducer);

// 16.2.8 render 함수 만들기
const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  counter.innerText = state.counter;
};

render();

// 16.2.9 구독하기
store.subscribe(render);

// 16.2.10 액션 발생시키기
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increse(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrese());
};
