# socket.io_chat
my own chat example program using socket.io
-------------------------------------------
dependencies:
 - socket.io v2
 - express
 - jquery(loaded from web)
 
what I've learned
----------------------------
 - purpose of AJAX
 - oddities of socket.io
 - oddities of jquery
 - back to the front-end
 - necessity of language support
 - always make sure of version support
 - personal motivation
 
how much did it took
--------------------
 - approx 3~4 days.
 
 - why do we use AJAX 왜 ajax를 사용하는가: ajax는 정말 빠르게 응답하고 요청할 수 있다. 쓸데없는 페이지리프레쉬도 없다. 구글이 ajax를 이용하면서 active X지도를 몰아낸 이유를 이해할 수 있었다.
 - socket.io의 괴상망측한 통일성...socket.에서만 되는 명령어와 io.에서만 되는 명령어가 다르다.
 - Jquery에서 직관적으로 될 것 같은 것들이 안될 때가 많다. 여러가지 테스트를 해볼 필요가 있다.
 - 백엔드가 처리할 일이 많은 줄 알았으나 결국 대부분의 작업은 클라이언트에서 이루어짐. Jquery와 bootstrap을 좀더 열심히 배울 필요가 있다.
 - 다음에 페이지를 만들때는 처음부터 언어 지원을 염두에 두고 만들자.
 - 처음에는 단순히 기능 흉내만 내는 거였는데, 2016년 자료들을 기준으로 했는데도 오류가 발생했다. 이상한 오류들이 2017년 최신 자료를 사용하니 해결되었다. 항상 해당 라이브러리의 documentation을 최소 한 번 읽어보자.
 - php를 왜 쓰는지 이해할 수 없을 정도로 최근의 개발환경은 너무나도 쉽고 간단하고 편하다! 이번 실험이 여러가지로 힘이 많이 되었다.
