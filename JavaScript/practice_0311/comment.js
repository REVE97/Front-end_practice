//구조 분해, 전개, 객체 병합 실습

const personalInfo = {
    name: '이효석',
    age: `Don't ask this :)`,
    email: 'xenosign@naver.com'
};

const jobInfo = {
    position: '코딩 강사',
    experience: '?년'
};

//병합
const profile = {...personalInfo, ...jobInfo, addr: '서대문구'};


//구조 분해
const{name, age, email, position, experience, addr} = profile;

console.log('이름: ',name);
console.log('나이: ',age);
console.log('이메일: ',email);
console.log('직책: ',position);
console.log('경력: ',experience);
console.log('지역: ',addr);
