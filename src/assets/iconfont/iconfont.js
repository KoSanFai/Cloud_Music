import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1611822371871'); /* IE9 */
  src: url('iconfont.eot?t=1611822371871#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABC4AAsAAAAAIGAAABBqAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCFbAquSKYWATYCJANwCzoABCAFhG0HgjwbLBujooaTVqRkf53ATRi4OmgZSWpRVFthtY2vpRkuMEKdCj7RKOS3DL9fHul4bzzmMiEEFuHrQynh+e/e9/eZM3Nf6RVTC8UehcKN+vIEQ6WZBuQDfr6i8/P8Nv/c9x4lPORJiRjIKkAwWBvA1DXjsbVBLEpXicPIP4w/MWpd9uL3msmiXPxsFnk51c+UuwEVIJkwqGuhyRX7Jb1PfkUrC0DQElgC4HL3sw0+FkFZOoHawlk4xaKtEW+BGiBgoH4PEADovNKZu7ZDd6bJCJ6hTUdQAQpCAFJ7auGRBCkfOe2DIJMqYMQuhE4Qctn2rsP/raV2rwDgcAuyL0I1srZ1YmZ257KzkHc/PHdh2hCQKglVjQFEVWAhy0LVyBptCrWpntIhm2q+0NAhBmOzHW4fiSuMAkeY9d9zQ0Bc21Co8/j+BRWLqoI0SzIKqpA7m3JSRF0DzphxtnecaPhqrg14Y99fftMUBcNF0Hmtxg8NXD/d7/XZa7uInLxkx4G78UDBEmAhe67jk7psybQ4z2xdAqJ29wZhK+yFO96TKXVpU3jUlkWs/8aLiIqJS0hKScvIogQREhGTkAomE0IOMZQVQFJo6iRAeohtgNCdVJgeAIiAAoiCAoiBAoiDAkiAAkiCAkiBAkiDAsiAAsiCAsiBAsiDAiiAAiiCAiiBAiiDAqiAAqiCAqiBAqiDQuoCCkCgNyFPRRmAWnoPgIW+A2kJuYGkxsTs4xZERgDxFnrkH5qbgDygLjP3FoMwNMz0nrwQrmYXxYhRQotJq10JSdBUfazAPpQiSjqH4ROEYK4gmc5kDlf3RGa6N5fJELJ/nM3mk+ld+WjtqKE8nS5zJf3ISWVBMQdLntLms4QUxvK2lX51h2vS6TtRlngzQumAjcFjDl86/mdE30KUQZXwzl2wCXM4sKDtFCTaXBFVsFxqiHiPtOiCumZYZ1BceE+8bP2iloSntRhfwed4fZKvEl4UG6DoC+n9aDt0j3DyHMxWiL0ogDfNOUNz2iyb1xeA5ho+4kScU6xUr8yBeDRwuqJjwRBXKXP1GOkqngoPob3brtTfn/hsPeVAPH7NyN5Aj2xWmzMW9HmSSBruW5Y5mktzhq97l7OD/sna3Ij29qLVxYb5ll9FkeoLDVRW6Z+mmvojI74erhkpXUANZrwCe2+81/rdacHoRZYJD1eG4icDzM/KiKc/sEb8dmGIYmzMgbALHkrqHg308o3YxHTgwKNCSjMbrouSmJjGAWrCxh0RYYbC2YNOG39QGKiFtNV8aIgid1Q641ACs6fVc7cO54tJ23uk+4arOcxTG6au9t+TGP5sZsWEWcChWdXsNixEqHdbjwlRDYcFP+/IwHZca+A0bLzJizY4+3rinELGNiOtwGxHOZNaoZOVZ1UU5DPb3E7tIScjcwoGa7CnuExhsK+u3SOrBrbFYPjF8bkySX80ErHjX+b/WyY5gcIMEzavTWlQTOdhpnTE94iE8aa3dLTbHOM2KM5EOkG/VgcGlcPNYfKB9kRSCF0AGSx7MME0TAT9WqtKzdY2NFWzwH1FMnF66aZDCPMwqfsitVz+lJpSWkL8HhJ93LZD3x6uI6MboYmuzRhq1N+hlkJ8pNj2MMc+sPPV6YY5rTzihfNottawIr10Aa2JHgEvXsIW/Vu+7gL08b5N1OGWDm+438aS0RryRV0QD8VzHOCHWsD9BMtqx6tdk01N0GcXx1XZanCQoKgty45zklKecI2XpQbeqV2A7r2deJQgBLybYJ5uvoN7sEQTOtNMFRQFlHt54aWsCt0Uy5saTzRNIsqWXzwNe/9mjzpd/MHoeLiVZTl2j0Y45gE/FxrO84MwyJlGRF5Vbtp1YyWTVssdXGW01Bw20QpZFuK482anOyZkj4tIMhsERJg+iDAqQCUNJa0iT1EdK2juDUbffzgfhewbHi2UXrd0mdSRNZrWhcFpsiStlha0411cTckcrcmLmo8813Q4YnuIuk+p4fJK2+2CbBPbEdi9NWNZJ9AIJz1mBNOnTQHSmpq4qIAMoqS5g+IFZ5NFjyzfDJ93/FjA3AvOQBR6CO6PBKid1PTEXcX7QZrQldKltf1jvUirOjBDsJe0Skdtqj4sJSc9wxaBwOMSmqy8gHvE8kaD+yYnT5o2WMYTLMSIQYX1affikiVaNSlZ1mR2uqxnuCUqwGboLOwRC+J9YF+FAuYp2b7cIaA2Ni6UgpDmqMatZ01sPTjke3Ur8f//cRvR+r//jLfhGiJuJdr+/79Q2dxDyGTETuyTBfcwfAy2ivARPTJZ5dynjUmWd4O7Fvn4E8ObkI1DBvHUJyeC/yTEwyk/HLOKpEiOFQSvetXvFdzfnD5BLQwaZUXbMJybiy1ZE1Q4fikrVSUULuly/3rJhLphLsIES6aF/SKZuKEiSZhuQkumhoebuwm5Pr08RU0BN5nRCS83uzxJNMAES6eFh/kWwB7Ws8IxhWPXj1l/pZakQiiy9pHOkKEzPmSRghABybpy0AoxHFlLpseMLXRYr6btuyKM8B1huKpn7yzkG4otGFPgyHxD1wd5IAeDr0RyxIOPKkViUlDQuCpYSKtcG2u3vfxpci8Qm3DmG0nv0F7JxYl4+DdTe4f0Tm3Y+yIwNOh2mznpyclMFiM5Jf1D3u4Y8uMqJYXBYiYnp0P9l83KGBM0QW6Qua+YJFM2y9zKGPKqZoDSnSV4eztWYkj4rGAsAS+JH7aq+/mmGNZdCBlUOXSLHt/7+PE+Yi9hgO/1lV4fNSVfO1U2sKYZsdfD/7o2Yozg8cIuV83vI5kLrhYfIzh4mig+uI/RM16IjzyRZiif4scPyCPRKPJ0YEdAnXkG5XGfCQPhZ5gUY9kF8/Emn68JFwKl55iGayfF0PGp1Vy+5eF40BshqXlej5ybtzmh7hnb2n6tlfPvy6gt235+9ph+tjgzL0ot7iJev467YIX9oj6PswYW69FrIT8q8C6D6S1f6Q3ij1zLhqtF0o+qv1R/qj78lqLEBIEgIQGhhESBIDFx9dZz+HzwaSXOyf1EzA18xVYGV/0tQiJl3CokdqtpVn8bplzhBXEBLa8oX45dhBBEFmJnz2KFvCDV93yQg7cAf3QrALwOEi2rqID4pvB3BfMZej3DkO4pOs5KiPFmFldPZRj0RFKa7A8Vxoo/veaYOK1ePP/4hUFvSJpo8fGDfoyTUbtx31uReWhDV8/aLP699czBrySNz+6R9/l1z5mXFlhb34n1gs9bL347bGEwnNy5QvagScyfWJZTCraIJTobbgH/1zXJhJg7N0sMx7645jHQzHXT4CLGEfAfCALHBCXDuplE0/i/HJrs126yqK567H7PuDpU1Ixx97Wi5Iz05K2gB8F+CuzOEDKGOvKrFXO5MOtPWKYr14oKBfpQZLe6XDBsNvoZLTDK+P9/ZwbJFnUUUsCd6PAzFk4fv8sICyXuOvKAu4w7ZFrQvHe7kTd7EUpBqbMXdoSRFOkeSdN0k5TXfZHiNb4+8uHVaiLfLdBqvkaCLQlYg1Q9y5rdTgvLzaad7vBtw3YjK5uk+OhABrmtDNmRLdb8huGReeBQLSqQBbGKAGproUimlBWi2kNwVbf9WmTLQNeyCmyzj5hGaNAa7kVERnwDRtXkKqDxso4LZcwF+wOw5lq0Ov91ZkHJCQGPug9r97N6nze8M7tP8QQnSmB11qrVqOgEkld79rMfPSf2g33usek6pVE9uRJovPRcN0Rohy2rV7CjwBOikXnaOwjyyDQhjr29vSamdCABatrptODysR0p5LylaCKaMG/Z5TC+kl91mmYDqfRWeZXkDTgd/LHkAL8hcEz0dUiYrnsN0j3YerHKvY7TwFnnrlJk6Q6ClX17Bjhq57vK0cJK56qA9+q2Tw7TBW/F/f6zrc3PeVezTy6rjGWdvNSY9LRRP67S17Wo8wLLdHKimkdd5NhQeBN8UJArWDn9pqiun7n/FMTzKND9Hc5FGrGHf07iXjrpm/NJ/FQAOpIGGJetbTrpW1uRMZDWgFwCNkpxHCrdlZVQfFxB2UAihw/3XsZ0OktqFQ7ohK2FlHnwD9qHmDGyGypzee6/eFRX3o48+0AdYBStpEGAjLBdm1BQjg5JT0H4X0Em5tqOWSFQG67lI5T545mYNbplyModNT+parl7yR+xc3TI6touFa75ou5yyjo0BXceOpyD01BGD5xQSH9GQw5++DDmRJPGrxFAxPRhw9ngTAxzh0JlC8hHrZVkraS7FnYtiqDZn6XB8Lrv6yvuBWn75IDUpqSur+j/5KYIDZYxesYKNRXVEyybYG7rqJteirypzW628muISLvppNk3WRbnzSwH6ybbDrs2FwzKAT1x9t9/T0RqgbqB+96iIeH6EtOmUTtNxLnbmzy+WdOGxLimERYvIRYzvDBVUx0VD1vBaDw9wQpehlhMeNP0h+P1gPeJlDoc0r9Plg3TAATwpJrZrMCspNU/Sh12qcAQqZ8GSICoAZXRWP2TBuntZiiUXIBIYmyM2UnYiYrB9GR9yg2MSgUXTsDF/+TmzgNe2GxIVzKBoUyHqUoGMJUxf18tgX2SBxc5L2yWmCQTkNv8weUCRbEZuBbN01yKJu9aNxpW2C7MHhNt1Zm5UWpJJ/7mTdSZ7bg4dyzayfX2CRQ8gEnRM3an4Y0+XyMuhMgkzvThfSbH0C0wH6/9GDwIv1x8VgbbZoQOe/uSbb2t7P9eeedBT58hkvqG4vns8lY7hcvfAAlyAR998xTxUQji3Tf+6lW84lZ4teneZ+frV+90Swf/2/7G7/CvAuA/9actgM91lwXwz8x+oACgB/P9wJf4HgH4Aj/r2Mmr2lfV+s/h/4NvDNltAD7PvEH2ZWfUnhwNcXUub8OLdUFMo3O6vMjd/8Q013ePpGOxpmXt2MGf5tjhN+uyqyOadbnOH47ROU6qtYiDXsn/NvfFWfNvlXY1+tGzP6XD/2/99mG4emybvu9GgP99ZWn5n2SIv0gRPrq8WilrvlXPqdoCz91/YEaZOMfSqmpNqniEpcKvNjnFuYFL7r080IC8J1U0StLyv9VGyWfm1WhBVFFDi927FJ2ENTEQdSjGLYwfP6FgpQGJY8Bc3k4UWcdFI+1PVFnXLXZvr+iU/SEGsqkYdx4Ip5gw7uY0KaLK2Mj1QVLtWbdXPnXSfqApTsWglV36wZgoXC6m82j8EzLGLIZJW7PMWUsdfScfd8Ogc15uom+xzlP7yR62ms00b9hp7Ts4dSpCSr7c2pAyHZwuUvOY7jo7jX37D8goHCWmFPni9AeKEnp6KcpwagnLk8ZSRVYl8ypbxtJqwjV5yh15HclIOHJ2jCdl8XtroVo2tVAjamNFRapyyGrT4o1ujhiMxGLoypoZUbHiJJCIRCUmcUlIUlKSlswq/UbKV6hYqXKVqtWq16hZC2tRFLXEow3EDk+ziI1FNoHEgmvPTfGV3fhJh1wEP5MrPLZatUe3mV4rNuc2xaGEo2xRfJLcLZsNKR7aY0sibsqeTbX4LjJZ5QXAJpfIy6WEawyvwgQ/Cde2VKvyxWlSiUy50GhVqVY3w/WkSGxUnA+82mgzQxtonA2+GuKJjfVIkK0yxvbabGMmOE83AAA=') format('woff2'),
  url('iconfont.woff?t=1611822371871') format('woff'),
  url('iconfont.ttf?t=1611822371871') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1611822371871#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-kuaijin:before {
  content: "\e61b";
}

.icon-yinle:before {
  content: "\e61c";
}

.icon-pinghengqi:before {
  content: "\e61d";
}

.icon-gengduo:before {
  content: "\e621";
}

.icon-ego-menu:before {
  content: "\e605";
}

.icon-pinglun:before {
  content: "\e63a";
}

.icon-chaxun:before {
  content: "\e606";
}

.icon-bofang:before {
  content: "\e607";
}

.icon-danquxunhuan:before {
  content: "\e608";
}

.icon-changpian:before {
  content: "\e609";
}

.icon-erji:before {
  content: "\e60a";
}

.icon-huatong:before {
  content: "\e60b";
}

.icon-jianshao:before {
  content: "\e60c";
}

.icon-jingyin:before {
  content: "\e60d";
}

.icon-liebiaoxunhuan:before {
  content: "\e60e";
}

.icon-shanchu:before {
  content: "\e60f";
}

.icon-shengyin:before {
  content: "\e610";
}

.icon-kuaitui:before {
  content: "\e611";
}

.icon-suiji:before {
  content: "\e612";
}

.icon-xiai:before {
  content: "\e613";
}

.icon-zanting:before {
  content: "\e614";
}

.icon-zhongzhi:before {
  content: "\e615";
}

.icon-jinzhi:before {
  content: "\e616";
}

.icon-liebiao:before {
  content: "\e617";
}

.icon-shezhi:before {
  content: "\e618";
}

.icon-shuaxin:before {
  content: "\e619";
}

.icon-zengjia:before {
  content: "\e61a";
}
`
