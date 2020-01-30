---
title: 2020-01-22 TIL
date: 2020-01-22
tag: ['TIL']
---

## 정규표현식

```javascript
const regExp2 = new RegExp(`[^D]`, 'g')

console.log('DADBDC'.match(regExp2))
```

- [] 범위지정
- ^[] 문자열의 처음
- [^] 부정을 의미. [^AB]는 AB를 제외한 모든 문자 [^ABD]은 ABD를 제외한 모든 문자를 의미

## 5FS

### Facts

- 장바구니 추가, 삭제 기능 수정
- 상품 구매하기 기능 수정
- 장바구니 구매하기 기능 수정
- docker의 동작원리 얕게.. 공부
- skill_tree 알고리즘 문제풀이
- 코딩 도장 문제풀이

### Feelings

- TEST케이스 넣기 전까지 다 끝낼 수 있었는데 못 끝내서 상당히 아쉽다.
- 정규식 편리한가?

### Findings

- 정규식으로 알고리즘 풀었더니 금방풀렸다. 계속 연습하면서 익숙해지자.
- 오랜만에 머리, 허리가 아프다.

### Future Action Plan

- 장바구니 삭제기능 오류 해결하기
- 비로그인 상태에서 '구매하기', '장바구니담기' 버튼 클릭시 로그인창으로 넘어가기
- esLint 돌리기

### Feedback
