// components/Child.js

import React from 'react';

function Child({ name }){
	return <div>내 이름은 {name} 입니다. </div>
}

Child.defaultProps={
	name: '기본이름'
}
export default Child