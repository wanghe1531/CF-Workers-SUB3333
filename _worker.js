
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'wanghe1531';
let guestToken = ''; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken = ''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID = ''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
vless://5982eb74-9635-42bc-a242-90f19782e2d4@193.134.211.217:37426?encryption=none&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=DzsLtjRSxatNaxThUhmdhWM0LmTYt8il_2P_ZpW1eAE&sid=74659379&type=tcp&headerType=none#vl-reality-C20251120027080
vmess://eyJhZGQiOiJ3d3cudmlzYS5jb20uc2ciLCJhaWQiOiIwIiwiaG9zdCI6ImRvd25sb2FkYWJsZS1wcmlvcml0aWVzLXl1a29uLWNsZWFyaW5nLnRyeWNsb3VkZmxhcmUuY29tIiwiaWQiOiI1OTgyZWI3NC05NjM1LTQyYmMtYTI0Mi05MGYxOTc4MmUyZDQiLCJuZXQiOiJ3cyIsInBhdGgiOiI1OTgyZWI3NC05NjM1LTQyYmMtYTI0Mi05MGYxOTc4MmUyZDQtdm0iLCJwb3J0IjoiODQ0MyIsInBzIjoidm0tYXJnby1DMjAyNTExMjAwMjcwODAiLCJ0bHMiOiJ0bHMiLCJzbmkiOiJkb3dubG9hZGFibGUtcHJpb3JpdGllcy15dWtvbi1jbGVhcmluZy50cnljbG91ZGZsYXJlLmNvbSIsImZwIjoiY2hyb21lIiwidHlwZSI6Im5vbmUiLCJ2IjoiMiJ9Cg==
vmess://eyJhZGQiOiJ3d3cudmlzYS5jb20uc2ciLCJhaWQiOiIwIiwiaG9zdCI6InljeWhrLndhbmdoZS5vbmxpbmUiLCJpZCI6IjU5ODJlYjc0LTk2MzUtNDJiYy1hMjQyLTkwZjE5NzgyZTJkNCIsIm5ldCI6IndzIiwicGF0aCI6IjU5ODJlYjc0LTk2MzUtNDJiYy1hMjQyLTkwZjE5NzgyZTJkNC12bSIsInBvcnQiOiI4NDQzIiwicHMiOiJ2bS1hcmdvLUMyMDI1MTEyMDAyNzA4MCIsInRscyI6InRscyIsInNuaSI6InljeWhrLndhbmdoZS5vbmxpbmUiLCJmcCI6ImNocm9tZSIsInR5cGUiOiJub25lIiwidiI6IjIifQo=
vmess://eyJhZGQiOiJ3d3cudmlzYS5jb20uc2ciLCJhaWQiOiIwIiwiaG9zdCI6InljeWhrLndhbmdoZTE1MzEuZXUuY2MiLCJpZCI6IjU5ODJlYjc0LTk2MzUtNDJiYy1hMjQyLTkwZjE5NzgyZTJkNCIsIm5ldCI6IndzIiwicGF0aCI6IjU5ODJlYjc0LTk2MzUtNDJiYy1hMjQyLTkwZjE5NzgyZTJkNC12bSIsInBvcnQiOiIyMDk1IiwicHMiOiJ2bS13cy1DMjAyNTExMjAwMjcwODAiLCJ0bHMiOiIiLCJ0eXBlIjoibm9uZSIsInYiOiIyIn0K
hysteria2://5982eb74-9635-42bc-a242-90f19782e2d4@ycyhk.wanghe1531.eu.cc:45602?security=tls&alpn=h3&insecure=0&allowInsecure=0&mport=46000-49000&sni=ycyhk.wanghe1531.eu.cc#hy2-C20251120027080
tuic://5982eb74-9635-42bc-a242-90f19782e2d4:5982eb74-9635-42bc-a242-90f19782e2d4@ycyhk.wanghe1531.eu.cc:34603?congestion_control=bbr&udp_relay_mode=native&alpn=h3&sni=ycyhk.wanghe1531.eu.cc&insecure=0&allowInsecure=0#tu5-C20251120027080
anytls://5982eb74-9635-42bc-a242-90f19782e2d4@ycyhk.wanghe1531.eu.cc:63341?&sni=ycyhk.wanghe1531.eu.cc&allowInsecure=0&insecure=0#anytls-C20251120027080
vless://a709ba1f-c8c4-4e21-b1fd-23cbac8b254d@193.134.211.217:53229?encryption=mlkem768x25519plus.native.0rtt.LisJwtyJiFYGBhg0CfUH3kh_0zFi4oodXjqiHhK65nwp-sM4B4pW74wq5vSE9Bg_e3N87bVVu5tsQ8xCNjIAroplSKVEdJnA_jAAhYdM6LJqVlaV56Sp3BQZlhiYddNe4ksfQHROFIvOqdNNkmloPNMdXNyJfYUx5CE4l6iYLSWlzNE5zsWyWgqAsjsP1wieVIKzPvKsswylqxEsTVkvGPpq60CUuKoswOajIJNrDKVXB-dmNVRBIEyjhDG5sJWne6e0wjlDC4lPMKyKJnGH-LOz6YqP4OB16flw1as6gbxzo2hCJLQoAyuoSJqa_pGAVDEu17JbUkS2wJldWtElXqmNgDQU7hTNm-UFVFpJUzu6sccC9ZRddlKXLQQIQElWilVRDZAx8wYk5wrGuEV9EeSz-0ElN5WxeYmyHSUgRgmOQ2s_AhA22IjMdTYx9Oq69UlAxWCbO3uYDUMkvabIqGWxQ0yJ4plE1YSenfq24wSIu1EaOeyIOIG9x8RZuxUms7C-e5C5VoVCH9EJ6uQv5JNqmWKOUFyrmzYpOTQIsnZmwiwjApQrgDAA8ypNgmVTEqx9Abywx7LFuioeAztRlUyo9UYCVng5rcs7InlP-3WKPlrDkGZe6MFghzconYOurWGqxCaOxLsrWWsw0KA7gxBlW-Y_QPZyX1ekBJfJwGU3OBycIvg3gkg8xkmRXlmezMclGqcgYTnEAchCgpGyXOGHLxa2G6UhPOA6B3WHSXKfKnd7HwPDIVi0_aCjQwUZ5oqnTOCH0gRqV_duVDHG72ihmcMdLNJDscWY4fQBkWdCpYS48WxbHAlkIYAwUSmYOCEBObSwFgrCn_ddw4sUFyirr9KTZBiy6oCnHNHH6uszXNaq85xzx2GFmheaoFUGdcMH06nMxZrDYjXFVNqJhaTNAQtMp6U_5IfLmHu7mVlod_wj3TsF6YsbHUoNFbEGiROjLOVJ55Qz3Fm73VuafJjPSTy6ZBdn1XkvcvgGEqCm2pQQ7VVQa3Ql2YUYZnLE4Qxp1jta9tF98oYTMHwdjCwGLCAfyDQQfGd8MMhbDqEaRCkhA7CvLlEJ8xJXaSHNwcgTEQyr0_EhwPOCRpyI74RhCGIextMnhEoeLVkuWhtLs5iYw9pZr8k5Jmea7gYhxMYEXiR5Qad4mdow5wjImFxU9BkaE-A0c8Mg4TaQcDtTZWB4AgazuLhHQHvDZKmX7aQjlpM6x2ku5nZ2rJV5BhE7j_Zq55sT6ZtGthR3hRaTQvmWxWYwgFY30WJIEomKfeNxQFdiGOUZcfqCPpEXLDasnjNHYUuWBFZVzBalh4cqlpkqFATGziQYa8YwtOo5EtzOrWEEDPyxGMd7NnPASMe_TeN3qQRK3fuRmhSQXwE56xoHr4Jq8iii3XkIAOOcuHdfllolpbwxaSdgQ-Q1cXAiJPHPGkuwNYUjvtgGTXiukMBFUZEjoAOubgOLJ6V1jLpAx7pcJzqdxcwavqUUFBUmMsO1gEtBf2gKhnK4_8pAmxgNd3QkMfBs3eJiPvAPOZWqNtXlbkDbutYPG-UlLiDPso4uj2j-wCsBgsj96rg&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=k9byBrlxvX4dsGIUhGw0Cb0XPoGSf4jVCtV3KczKilo&sid=ee7f86a1&type=xhttp&path=a709ba1f-c8c4-4e21-b1fd-23cbac8b254d-xh&mode=auto#HK-YCY-vl-xhttp-reality-enc-C20251120027080
vless://a709ba1f-c8c4-4e21-b1fd-23cbac8b254d@193.134.211.217:18337?encryption=mlkem768x25519plus.native.0rtt.LisJwtyJiFYGBhg0CfUH3kh_0zFi4oodXjqiHhK65nwp-sM4B4pW74wq5vSE9Bg_e3N87bVVu5tsQ8xCNjIAroplSKVEdJnA_jAAhYdM6LJqVlaV56Sp3BQZlhiYddNe4ksfQHROFIvOqdNNkmloPNMdXNyJfYUx5CE4l6iYLSWlzNE5zsWyWgqAsjsP1wieVIKzPvKsswylqxEsTVkvGPpq60CUuKoswOajIJNrDKVXB-dmNVRBIEyjhDG5sJWne6e0wjlDC4lPMKyKJnGH-LOz6YqP4OB16flw1as6gbxzo2hCJLQoAyuoSJqa_pGAVDEu17JbUkS2wJldWtElXqmNgDQU7hTNm-UFVFpJUzu6sccC9ZRddlKXLQQIQElWilVRDZAx8wYk5wrGuEV9EeSz-0ElN5WxeYmyHSUgRgmOQ2s_AhA22IjMdTYx9Oq69UlAxWCbO3uYDUMkvabIqGWxQ0yJ4plE1YSenfq24wSIu1EaOeyIOIG9x8RZuxUms7C-e5C5VoVCH9EJ6uQv5JNqmWKOUFyrmzYpOTQIsnZmwiwjApQrgDAA8ypNgmVTEqx9Abywx7LFuioeAztRlUyo9UYCVng5rcs7InlP-3WKPlrDkGZe6MFghzconYOurWGqxCaOxLsrWWsw0KA7gxBlW-Y_QPZyX1ekBJfJwGU3OBycIvg3gkg8xkmRXlmezMclGqcgYTnEAchCgpGyXOGHLxa2G6UhPOA6B3WHSXKfKnd7HwPDIVi0_aCjQwUZ5oqnTOCH0gRqV_duVDHG72ihmcMdLNJDscWY4fQBkWdCpYS48WxbHAlkIYAwUSmYOCEBObSwFgrCn_ddw4sUFyirr9KTZBiy6oCnHNHH6uszXNaq85xzx2GFmheaoFUGdcMH06nMxZrDYjXFVNqJhaTNAQtMp6U_5IfLmHu7mVlod_wj3TsF6YsbHUoNFbEGiROjLOVJ55Qz3Fm73VuafJjPSTy6ZBdn1XkvcvgGEqCm2pQQ7VVQa3Ql2YUYZnLE4Qxp1jta9tF98oYTMHwdjCwGLCAfyDQQfGd8MMhbDqEaRCkhA7CvLlEJ8xJXaSHNwcgTEQyr0_EhwPOCRpyI74RhCGIextMnhEoeLVkuWhtLs5iYw9pZr8k5Jmea7gYhxMYEXiR5Qad4mdow5wjImFxU9BkaE-A0c8Mg4TaQcDtTZWB4AgazuLhHQHvDZKmX7aQjlpM6x2ku5nZ2rJV5BhE7j_Zq55sT6ZtGthR3hRaTQvmWxWYwgFY30WJIEomKfeNxQFdiGOUZcfqCPpEXLDasnjNHYUuWBFZVzBalh4cqlpkqFATGziQYa8YwtOo5EtzOrWEEDPyxGMd7NnPASMe_TeN3qQRK3fuRmhSQXwE56xoHr4Jq8iii3XkIAOOcuHdfllolpbwxaSdgQ-Q1cXAiJPHPGkuwNYUjvtgGTXiukMBFUZEjoAOubgOLJ6V1jLpAx7pcJzqdxcwavqUUFBUmMsO1gEtBf2gKhnK4_8pAmxgNd3QkMfBs3eJiPvAPOZWqNtXlbkDbutYPG-UlLiDPso4uj2j-wCsBgsj96rg&flow=xtls-rprx-vision&type=xhttp&path=a709ba1f-c8c4-4e21-b1fd-23cbac8b254d-vx&mode=auto#HK-YCY-vl-xhttp-enc-C20251120027080
vless://a709ba1f-c8c4-4e21-b1fd-23cbac8b254d@yg2.ygkkk.dpdns.org:18337?encryption=mlkem768x25519plus.native.0rtt.LisJwtyJiFYGBhg0CfUH3kh_0zFi4oodXjqiHhK65nwp-sM4B4pW74wq5vSE9Bg_e3N87bVVu5tsQ8xCNjIAroplSKVEdJnA_jAAhYdM6LJqVlaV56Sp3BQZlhiYddNe4ksfQHROFIvOqdNNkmloPNMdXNyJfYUx5CE4l6iYLSWlzNE5zsWyWgqAsjsP1wieVIKzPvKsswylqxEsTVkvGPpq60CUuKoswOajIJNrDKVXB-dmNVRBIEyjhDG5sJWne6e0wjlDC4lPMKyKJnGH-LOz6YqP4OB16flw1as6gbxzo2hCJLQoAyuoSJqa_pGAVDEu17JbUkS2wJldWtElXqmNgDQU7hTNm-UFVFpJUzu6sccC9ZRddlKXLQQIQElWilVRDZAx8wYk5wrGuEV9EeSz-0ElN5WxeYmyHSUgRgmOQ2s_AhA22IjMdTYx9Oq69UlAxWCbO3uYDUMkvabIqGWxQ0yJ4plE1YSenfq24wSIu1EaOeyIOIG9x8RZuxUms7C-e5C5VoVCH9EJ6uQv5JNqmWKOUFyrmzYpOTQIsnZmwiwjApQrgDAA8ypNgmVTEqx9Abywx7LFuioeAztRlUyo9UYCVng5rcs7InlP-3WKPlrDkGZe6MFghzconYOurWGqxCaOxLsrWWsw0KA7gxBlW-Y_QPZyX1ekBJfJwGU3OBycIvg3gkg8xkmRXlmezMclGqcgYTnEAchCgpGyXOGHLxa2G6UhPOA6B3WHSXKfKnd7HwPDIVi0_aCjQwUZ5oqnTOCH0gRqV_duVDHG72ihmcMdLNJDscWY4fQBkWdCpYS48WxbHAlkIYAwUSmYOCEBObSwFgrCn_ddw4sUFyirr9KTZBiy6oCnHNHH6uszXNaq85xzx2GFmheaoFUGdcMH06nMxZrDYjXFVNqJhaTNAQtMp6U_5IfLmHu7mVlod_wj3TsF6YsbHUoNFbEGiROjLOVJ55Qz3Fm73VuafJjPSTy6ZBdn1XkvcvgGEqCm2pQQ7VVQa3Ql2YUYZnLE4Qxp1jta9tF98oYTMHwdjCwGLCAfyDQQfGd8MMhbDqEaRCkhA7CvLlEJ8xJXaSHNwcgTEQyr0_EhwPOCRpyI74RhCGIextMnhEoeLVkuWhtLs5iYw9pZr8k5Jmea7gYhxMYEXiR5Qad4mdow5wjImFxU9BkaE-A0c8Mg4TaQcDtTZWB4AgazuLhHQHvDZKmX7aQjlpM6x2ku5nZ2rJV5BhE7j_Zq55sT6ZtGthR3hRaTQvmWxWYwgFY30WJIEomKfeNxQFdiGOUZcfqCPpEXLDasnjNHYUuWBFZVzBalh4cqlpkqFATGziQYa8YwtOo5EtzOrWEEDPyxGMd7NnPASMe_TeN3qQRK3fuRmhSQXwE56xoHr4Jq8iii3XkIAOOcuHdfllolpbwxaSdgQ-Q1cXAiJPHPGkuwNYUjvtgGTXiukMBFUZEjoAOubgOLJ6V1jLpAx7pcJzqdxcwavqUUFBUmMsO1gEtBf2gKhnK4_8pAmxgNd3QkMfBs3eJiPvAPOZWqNtXlbkDbutYPG-UlLiDPso4uj2j-wCsBgsj96rg&flow=xtls-rprx-vision&type=xhttp&host=ycyhk.wanghe1531.eu.cc&path=a709ba1f-c8c4-4e21-b1fd-23cbac8b254d-vx&mode=auto#HK-YCY-vl-xhttp-enc-cdn-C20251120027080
vless://a709ba1f-c8c4-4e21-b1fd-23cbac8b254d@193.134.211.217:24219?encryption=none&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=k9byBrlxvX4dsGIUhGw0Cb0XPoGSf4jVCtV3KczKilo&sid=ee7f86a1&type=tcp&headerType=none#HK-YCY-vl-reality-vision-C20251120027080
ss://MjAyMi1ibGFrZTMtYWVzLTEyOC1nY206MVNvMk5JenFha3VENG83anVjU1Yydz09QDE5My4xMzQuMjExLjIxNzoyODQ0NQ==#HK-YCY-Shadowsocks-2022-C20251120027080
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bS13cy1DMjAyNTExMjAwMjcwODAiLCAiYWRkIjogIjE5My4xMzQuMjExLjIxNyIsICJwb3J0IjogIjE1MTUxIiwgImlkIjogImE3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZCIsICJhaWQiOiAiMCIsICJzY3kiOiAiYXV0byIsICJuZXQiOiAid3MiLCAidHlwZSI6ICJub25lIiwgImhvc3QiOiAid3d3LmJpbmcuY29tIiwgInBhdGgiOiAiL2E3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZC12bSIsICJ0bHMiOiAiIn0K
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bS13cy1jZG4tQzIwMjUxMTIwMDI3MDgwIiwgImFkZCI6ICJ5ZzIueWdra2suZHBkbnMub3JnIiwgInBvcnQiOiAiMTUxNTEiLCAiaWQiOiAiYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkIiwgImFpZCI6ICIwIiwgInNjeSI6ICJhdXRvIiwgIm5ldCI6ICJ3cyIsICJ0eXBlIjogIm5vbmUiLCAiaG9zdCI6ICJ5Y3loay53YW5naGUxNTMxLmV1LmNjIiwgInBhdGgiOiAiL2E3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZC12bSIsICJ0bHMiOiAiIn0K
anytls://a709ba1f-c8c4-4e21-b1fd-23cbac8b254d@193.134.211.217:20914?insecure=1&allowInsecure=1#HK-YCY-anytls-C20251120027080
anytls://a709ba1f-c8c4-4e21-b1fd-23cbac8b254d@193.134.211.217:14443?security=reality&sni=apple.com&fp=chrome&pbk=kd9C0UgDbs778Q6qtkWiWV-EHDriw_Tb9Rf1MymRe3Q&sid=bfc3cb07&type=tcp&headerType=none#HK-YCY-any-reality-C20251120027080
hysteria2://a709ba1f-c8c4-4e21-b1fd-23cbac8b254d@193.134.211.217:34397?security=tls&alpn=h3&insecure=1&sni=www.bing.com#HK-YCY-hy2-C20251120027080
tuic://a709ba1f-c8c4-4e21-b1fd-23cbac8b254d:a709ba1f-c8c4-4e21-b1fd-23cbac8b254d@193.134.211.217:46999?congestion_control=bbr&udp_relay_mode=native&alpn=h3&sni=www.bing.com&allow_insecure=1&allowInsecure=1#HK-YCY-tuic-C20251120027080
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy10bHMtYXJnby1DMjAyNTExMjAwMjcwODAtNDQzIiwgImFkZCI6ICJ5ZzEueWdra2suZHBkbnMub3JnIiwgInBvcnQiOiAiNDQzIiwgImlkIjogImE3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZCIsICJhaWQiOiAiMCIsICJzY3kiOiAiYXV0byIsICJuZXQiOiAid3MiLCAidHlwZSI6ICJub25lIiwgImhvc3QiOiAieWN5aGsud2FuZ2hlLm9ubGluZSIsICJwYXRoIjogIi9hNzA5YmExZi1jOGM0LTRlMjEtYjFmZC0yM2NiYWM4YjI1NGQtdm0iLCAidGxzIjogInRscyIsICJzbmkiOiAieWN5aGsud2FuZ2hlLm9ubGluZSIsICJhbHBuIjogIiIsICJmcCI6ICJjaHJvbWUifQo=
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy10bHMtYXJnby1DMjAyNTExMjAwMjcwODAtODQ0MyIsICJhZGQiOiAieWcyLnlna2trLmRwZG5zLm9yZyIsICJwb3J0IjogIjg0NDMiLCAiaWQiOiAiYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkIiwgImFpZCI6ICIwIiwgInNjeSI6ICJhdXRvIiwgIm5ldCI6ICJ3cyIsICJ0eXBlIjogIm5vbmUiLCAiaG9zdCI6ICJ5Y3loay53YW5naGUub25saW5lIiwgInBhdGgiOiAiL2E3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZC12bSIsICJ0bHMiOiAidGxzIiwgInNuaSI6ICJ5Y3loay53YW5naGUub25saW5lIiwgImFscG4iOiAiIiwgImZwIjogImNocm9tZSJ9Cg==
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy10bHMtYXJnby1DMjAyNTExMjAwMjcwODAtMjA1MyIsICJhZGQiOiAieWczLnlna2trLmRwZG5zLm9yZyIsICJwb3J0IjogIjIwNTMiLCAiaWQiOiAiYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkIiwgImFpZCI6ICIwIiwgInNjeSI6ICJhdXRvIiwgIm5ldCI6ICJ3cyIsICJ0eXBlIjogIm5vbmUiLCAiaG9zdCI6ICJ5Y3loay53YW5naGUub25saW5lIiwgInBhdGgiOiAiL2E3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZC12bSIsICJ0bHMiOiAidGxzIiwgInNuaSI6ICJ5Y3loay53YW5naGUub25saW5lIiwgImFscG4iOiAiIiwgImZwIjogImNocm9tZSJ9Cg==
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy10bHMtYXJnby1DMjAyNTExMjAwMjcwODAtMjA4MyIsICJhZGQiOiAieWc0Lnlna2trLmRwZG5zLm9yZyIsICJwb3J0IjogIjIwODMiLCAiaWQiOiAiYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkIiwgImFpZCI6ICIwIiwgInNjeSI6ICJhdXRvIiwgIm5ldCI6ICJ3cyIsICJ0eXBlIjogIm5vbmUiLCAiaG9zdCI6ICJ5Y3loay53YW5naGUub25saW5lIiwgInBhdGgiOiAiL2E3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZC12bSIsICJ0bHMiOiAidGxzIiwgInNuaSI6ICJ5Y3loay53YW5naGUub25saW5lIiwgImFscG4iOiAiIiwgImZwIjogImNocm9tZSJ9Cg==
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy10bHMtYXJnby1DMjAyNTExMjAwMjcwODAtMjA4NyIsICJhZGQiOiAieWc1Lnlna2trLmRwZG5zLm9yZyIsICJwb3J0IjogIjIwODciLCAiaWQiOiAiYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkIiwgImFpZCI6ICIwIiwgInNjeSI6ICJhdXRvIiwgIm5ldCI6ICJ3cyIsICJ0eXBlIjogIm5vbmUiLCAiaG9zdCI6ICJ5Y3loay53YW5naGUub25saW5lIiwgInBhdGgiOiAiL2E3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZC12bSIsICJ0bHMiOiAidGxzIiwgInNuaSI6ICJ5Y3loay53YW5naGUub25saW5lIiwgImFscG4iOiAiIiwgImZwIjogImNocm9tZSJ9Cg==
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy10bHMtYXJnby1DMjAyNTExMjAwMjcwODAtMjA5NiIsICJhZGQiOiAiWzI2MDY6NDcwMDo6MF0iLCAicG9ydCI6ICIyMDk2IiwgImlkIjogImE3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZCIsICJhaWQiOiAiMCIsICJzY3kiOiAiYXV0byIsICJuZXQiOiAid3MiLCAidHlwZSI6ICJub25lIiwgImhvc3QiOiAieWN5aGsud2FuZ2hlLm9ubGluZSIsICJwYXRoIjogIi9hNzA5YmExZi1jOGM0LTRlMjEtYjFmZC0yM2NiYWM4YjI1NGQtdm0iLCAidGxzIjogInRscyIsICJzbmkiOiAieWN5aGsud2FuZ2hlLm9ubGluZSIsICJhbHBuIjogIiIsICJmcCI6ICJjaHJvbWUifQo=
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy1hcmdvLUMyMDI1MTEyMDAyNzA4MC04MCIsICJhZGQiOiAieWc2Lnlna2trLmRwZG5zLm9yZyIsICJwb3J0IjogIjgwIiwgImlkIjogImE3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZCIsICJhaWQiOiAiMCIsICJzY3kiOiAiYXV0byIsICJuZXQiOiAid3MiLCAidHlwZSI6ICJub25lIiwgImhvc3QiOiAieWN5aGsud2FuZ2hlLm9ubGluZSIsICJwYXRoIjogIi9hNzA5YmExZi1jOGM0LTRlMjEtYjFmZC0yM2NiYWM4YjI1NGQtdm0iLCAidGxzIjogIiJ9Cg==
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy1hcmdvLUMyMDI1MTEyMDAyNzA4MC04MDgwIiwgImFkZCI6ICJ5ZzcueWdra2suZHBkbnMub3JnIiwgInBvcnQiOiAiODA4MCIsICJpZCI6ICJhNzA5YmExZi1jOGM0LTRlMjEtYjFmZC0yM2NiYWM4YjI1NGQiLCAiYWlkIjogIjAiLCAic2N5IjogImF1dG8iLCAibmV0IjogIndzIiwgInR5cGUiOiAibm9uZSIsICJob3N0IjogInljeWhrLndhbmdoZS5vbmxpbmUiLCAicGF0aCI6ICIvYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkLXZtIiwgInRscyI6ICIifQo=
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy1hcmdvLUMyMDI1MTEyMDAyNzA4MC04ODgwIiwgImFkZCI6ICJ5ZzgueWdra2suZHBkbnMub3JnIiwgInBvcnQiOiAiODg4MCIsICJpZCI6ICJhNzA5YmExZi1jOGM0LTRlMjEtYjFmZC0yM2NiYWM4YjI1NGQiLCAiYWlkIjogIjAiLCAic2N5IjogImF1dG8iLCAibmV0IjogIndzIiwgInR5cGUiOiAibm9uZSIsICJob3N0IjogInljeWhrLndhbmdoZS5vbmxpbmUiLCAicGF0aCI6ICIvYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkLXZtIiwgInRscyI6ICIifQo=
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy1hcmdvLUMyMDI1MTEyMDAyNzA4MC0yMDUyIiwgImFkZCI6ICJ5ZzkueWdra2suZHBkbnMub3JnIiwgInBvcnQiOiAiMjA1MiIsICJpZCI6ICJhNzA5YmExZi1jOGM0LTRlMjEtYjFmZC0yM2NiYWM4YjI1NGQiLCAiYWlkIjogIjAiLCAic2N5IjogImF1dG8iLCAibmV0IjogIndzIiwgInR5cGUiOiAibm9uZSIsICJob3N0IjogInljeWhrLndhbmdoZS5vbmxpbmUiLCAicGF0aCI6ICIvYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkLXZtIiwgInRscyI6ICIifQo=
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy1hcmdvLUMyMDI1MTEyMDAyNzA4MC0yMDgyIiwgImFkZCI6ICJ5ZzEwLnlna2trLmRwZG5zLm9yZyIsICJwb3J0IjogIjIwODIiLCAiaWQiOiAiYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkIiwgImFpZCI6ICIwIiwgInNjeSI6ICJhdXRvIiwgIm5ldCI6ICJ3cyIsICJ0eXBlIjogIm5vbmUiLCAiaG9zdCI6ICJ5Y3loay53YW5naGUub25saW5lIiwgInBhdGgiOiAiL2E3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZC12bSIsICJ0bHMiOiAiIn0K
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy1hcmdvLUMyMDI1MTEyMDAyNzA4MC0yMDg2IiwgImFkZCI6ICJ5ZzExLnlna2trLmRwZG5zLm9yZyIsICJwb3J0IjogIjIwODYiLCAiaWQiOiAiYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkIiwgImFpZCI6ICIwIiwgInNjeSI6ICJhdXRvIiwgIm5ldCI6ICJ3cyIsICJ0eXBlIjogIm5vbmUiLCAiaG9zdCI6ICJ5Y3loay53YW5naGUub25saW5lIiwgInBhdGgiOiAiL2E3MDliYTFmLWM4YzQtNGUyMS1iMWZkLTIzY2JhYzhiMjU0ZC12bSIsICJ0bHMiOiAiIn0K
vmess://eyAidiI6ICIyIiwgInBzIjogIkhLLVlDWS12bWVzcy13cy1hcmdvLUMyMDI1MTEyMDAyNzA4MC0yMDk1IiwgImFkZCI6ICJbMjQwMDpjYjAwOjIwNDk6OjBdIiwgInBvcnQiOiAiMjA5NSIsICJpZCI6ICJhNzA5YmExZi1jOGM0LTRlMjEtYjFmZC0yM2NiYWM4YjI1NGQiLCAiYWlkIjogIjAiLCAic2N5IjogImF1dG8iLCAibmV0IjogIndzIiwgInR5cGUiOiAibm9uZSIsICJob3N0IjogInljeWhrLndhbmdoZS5vbmxpbmUiLCAicGF0aCI6ICIvYTcwOWJhMWYtYzhjNC00ZTIxLWIxZmQtMjNjYmFjOGIyNTRkLXZtIiwgInRscyI6ICIifQo=
vless://a44a4ff9-f484-49ef-bda3-c40521274627@ycyhk.wanghe1531.eu.cc:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh
vless://a44a4ff9-f484-49ef-bda3-c40521274627@104.20.7.102:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh
vless://a44a4ff9-f484-49ef-bda3-c40521274627@104.26.11.22:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh
vless://a44a4ff9-f484-49ef-bda3-c40521274627@104.26.0.172:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh
vless://a44a4ff9-f484-49ef-bda3-c40521274627@172.67.75.148:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh
vless://a44a4ff9-f484-49ef-bda3-c40521274627@104.26.13.32:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh
vless://a44a4ff9-f484-49ef-bda3-c40521274627@104.26.2.226:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh
vless://a44a4ff9-f484-49ef-bda3-c40521274627@104.26.10.4:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh
vless://a44a4ff9-f484-49ef-bda3-c40521274627@104.26.2.12:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh
vless://a44a4ff9-f484-49ef-bda3-c40521274627@104.26.12.191:443?encryption=none&security=tls&sni=ycyhk.wanghe1531.eu.cc&fp=chrome&alpn=h2%2Chttp%2F1.1&insecure=1&allowInsecure=1&type=ws&host=ycyhk.wanghe1531.eu.cc&path=%2Fycy#hk-ycyhk-2jnwqbnh

`;

let urls = [];
let subConverter = "SUBAPI.cmliussss.net"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = env.TG || TG;
		subConverter = env.SUBAPI || subConverter;
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		guestToken = env.GUESTTOKEN || env.GUEST || guestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const 访客订阅 = guestToken;
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
		total = total * 1099511627776;
		let expire = Math.floor(timestamp / 1000);
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		if (!([mytoken, fakeToken, 访客订阅].includes(token) || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
			if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			if (env.KV) {
				await 迁移地址列表(env, 'LINK.txt');
				if (userAgent.includes('mozilla') && !url.search) {
					await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
					return await KV(request, env, 'LINK.txt', 访客订阅);
				} else {
					MainData = await env.KV.get('LINK.txt') || MainData;
				}
			} else {
				MainData = env.LINK || MainData;
				if (env.LINKSUB) urls = await ADD(env.LINKSUB);
			}
			let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
			let 自建节点 = "";
			let 订阅链接 = "";
			for (let x of 重新汇总所有链接) {
				if (x.toLowerCase().startsWith('http')) {
					订阅链接 += x + '\n';
				} else {
					自建节点 += x + '\n';
				}
			}
			MainData = 自建节点;
			urls = await ADD(订阅链接);
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const isSubConverterRequest = request.headers.get('subconverter-request') || request.headers.get('subconverter-version') || userAgent.includes('subconverter');
			let 订阅格式 = 'base64';
			if (!(userAgent.includes('null') || isSubConverterRequest || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase()))) {
				if (userAgent.includes('sing-box') || userAgent.includes('singbox') || url.searchParams.has('sb') || url.searchParams.has('singbox')) {
					订阅格式 = 'singbox';
				} else if (userAgent.includes('surge') || url.searchParams.has('surge')) {
					订阅格式 = 'surge';
				} else if (userAgent.includes('quantumult') || url.searchParams.has('quanx')) {
					订阅格式 = 'quanx';
				} else if (userAgent.includes('loon') || url.searchParams.has('loon')) {
					订阅格式 = 'loon';
				} else if (userAgent.includes('clash') || userAgent.includes('meta') || userAgent.includes('mihomo') || url.searchParams.has('clash')) {
					订阅格式 = 'clash';
				}
			}

			let subConverterUrl;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('b64') || url.searchParams.has('base64')) 订阅格式 = 'base64';
			else if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if (url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if (url.searchParams.has('surge')) 追加UA = 'surge';
			else if (url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if (url.searchParams.has('loon')) 追加UA = 'Loon';

			const 订阅链接数组 = [...new Set(urls)].filter(item => item?.trim?.()); // 去重
			if (订阅链接数组.length > 0) {
				const 请求订阅响应内容 = await getSUB(订阅链接数组, request, 追加UA, userAgentHeader);
				console.log(请求订阅响应内容);
				req_data += 请求订阅响应内容[0].join('\n');
				订阅转换URL += "|" + 请求订阅响应内容[1];
				if (订阅格式 == 'base64' && !isSubConverterRequest && 请求订阅响应内容[1].includes('://')) {
					subConverterUrl = `${subProtocol}://${subConverter}/sub?target=mixed&url=${encodeURIComponent(请求订阅响应内容[1])}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
					try {
						const subConverterResponse = await fetch(subConverterUrl, { headers: { 'User-Agent': 'v2rayN/CF-Workers-SUB  (https://github.com/cmliu/CF-Workers-SUB)' } });
						if (subConverterResponse.ok) {
							const subConverterContent = await subConverterResponse.text();
							req_data += '\n' + atob(subConverterContent);
						}
					} catch (error) {
						console.log('订阅转换请回base64失败，检查订阅转换后端是否正常运行');
					}
				}
			}

			if (env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;

						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}

					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}

				base64Data = encodeBase64(result)
			}

			// 构建响应头对象
			const responseHeaders = {
				"content-type": "text/plain; charset=utf-8",
				"Profile-Update-Interval": `${SUBUpdateTime}`,
				"Profile-web-page-url": request.url.includes('?') ? request.url.split('?')[0] : request.url,
				//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
			};

			if (订阅格式 == 'base64' || token == fakeToken) {
				return new Response(base64Data, { headers: responseHeaders });
			} else if (订阅格式 == 'clash') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=surge&ver=4&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subConverterResponse = await fetch(subConverterUrl, { headers: { 'User-Agent': userAgentHeader } });//订阅转换
				if (!subConverterResponse.ok) return new Response(base64Data, { headers: responseHeaders });
				let subConverterContent = await subConverterResponse.text();
				if (订阅格式 == 'clash') subConverterContent = await clashFix(subConverterContent);
				// 只有非浏览器订阅才会返回SUBNAME
				if (!userAgent.includes('mozilla')) responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(FileName)}`;
				return new Response(subConverterContent, { headers: responseHeaders });
			} catch (error) {
				return new Response(base64Data, { headers: responseHeaders });
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, '\n').replace(/\n+/g, '\n');	// 替换为换行
	//console.log(addtext);
	if (addtext.charAt(0) == '\n') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == '\n') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split('\n');
	//console.log(add);
	return add;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}

async function sendMessage(type, ip, add_data = "") {
	if (BotToken !== '' && ChatID !== '') {
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}

		let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();

	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	return secondHex.toLowerCase();
}

function clashFix(content) {
	if (content.includes('wireguard') && !content.includes('remote-dns-resolve')) {
		let lines;
		if (content.includes('\r\n')) {
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}

		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	} else api = [...new Set(api)]; // 去重
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies:')) {
					//console.log('Clash订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds"') && content.includes('inbounds"')) {
					//console.log('Singbox订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					//console.log('明文订阅: ' + response.apiUrl);
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)) {
					//console.log('Base64订阅: ' + response.apiUrl);
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log('异常订阅: ' + 异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `${atob('djJyYXlOLzYuNDU=')} cmliu/CF-Workers-SUB ${追加UA}(${userAgentHeader})`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow",
		cf: {
			// 忽略SSL证书验证
			insecureSkipVerify: true,
			// 允许自签名证书
			allowUntrusted: true,
			// 禁用证书验证
			validateCertificate: false
		}
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	// 先移除所有空白字符(空格、换行、回车等)
	const cleanStr = str.replace(/\s/g, '');
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(cleanStr);
}

async function 迁移地址列表(env, txt = 'ADD.txt') {
	const 旧数据 = await env.KV.get(`/${txt}`);
	const 新数据 = await env.KV.get(txt);

	if (旧数据 && !新数据) {
		// 写入新位置
		await env.KV.put(txt, 旧数据);
		// 删除旧数据
		await env.KV.delete(`/${txt}`);
		return true;
	}
	return false;
}

async function KV(request, env, txt = 'ADD.txt', guest) {
	const url = new URL(request.url);
	try {
		// POST请求处理
		if (request.method === "POST") {
			if (!env.KV) return new Response("未绑定KV空间", { status: 400 });
			try {
				const content = await request.text();
				await env.KV.put(txt, content);
				return new Response("保存成功");
			} catch (error) {
				console.error('保存KV时发生错误:', error);
				return new Response("保存失败: " + error.message, { status: 500 });
			}
		}

		// GET请求部分
		let content = '';
		let hasKV = !!env.KV;

		if (hasKV) {
			try {
				content = await env.KV.get(txt) || '';
			} catch (error) {
				console.error('读取KV时发生错误:', error);
				content = '读取数据时发生错误: ' + error.message;
			}
		}

		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<title>${FileName} 订阅编辑</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
						body {
							margin: 0;
							padding: 15px; /* 调整padding */
							box-sizing: border-box;
							font-size: 13px; /* 设置全局字体大小 */
						}
						.editor-container {
							width: 100%;
							max-width: 100%;
							margin: 0 auto;
						}
						.editor {
							width: 100%;
							height: 300px; /* 调整高度 */
							margin: 15px 0; /* 调整margin */
							padding: 10px; /* 调整padding */
							box-sizing: border-box;
							border: 1px solid #ccc;
							border-radius: 4px;
							font-size: 13px;
							line-height: 1.5;
							overflow-y: auto;
							resize: none;
						}
						.save-container {
							margin-top: 8px; /* 调整margin */
							display: flex;
							align-items: center;
							gap: 10px; /* 调整gap */
						}
						.save-btn, .back-btn {
							padding: 6px 15px; /* 调整padding */
							color: white;
							border: none;
							border-radius: 4px;
							cursor: pointer;
						}
						.save-btn {
							background: #4CAF50;
						}
						.save-btn:hover {
							background: #45a049;
						}
						.back-btn {
							background: #666;
						}
						.back-btn:hover {
							background: #555;
						}
						.save-status {
							color: #666;
						}
					</style>
					<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
				</head>
				<body>
					################################################################<br>
					Subscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>
					---------------------------------------------------------------<br>
					自适应订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sub','qrcode_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}</a><br>
					<div id="qrcode_0" style="margin: 10px 10px 10px 10px;"></div>
					Base64订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?b64</a><br>
					<div id="qrcode_1" style="margin: 10px 10px 10px 10px;"></div>
					clash订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?clash','qrcode_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?clash</a><br>
					<div id="qrcode_2" style="margin: 10px 10px 10px 10px;"></div>
					singbox订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sb','qrcode_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?sb</a><br>
					<div id="qrcode_3" style="margin: 10px 10px 10px 10px;"></div>
					surge订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?surge','qrcode_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?surge</a><br>
					<div id="qrcode_4" style="margin: 10px 10px 10px 10px;"></div>
					loon订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?loon','qrcode_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?loon</a><br>
					<div id="qrcode_5" style="margin: 10px 10px 10px 10px;"></div>
					&nbsp;&nbsp;<strong><a href="javascript:void(0);" id="noticeToggle" onclick="toggleNotice()">查看访客订阅∨</a></strong><br>
					<div id="noticeContent" class="notice-content" style="display: none;">
						---------------------------------------------------------------<br>
						访客订阅只能使用订阅功能，无法查看配置页！<br>
						GUEST（访客订阅TOKEN）: <strong>${guest}</strong><br>
						---------------------------------------------------------------<br>
						自适应订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}','guest_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}</a><br>
						<div id="guest_0" style="margin: 10px 10px 10px 10px;"></div>
						Base64订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&b64','guest_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&b64</a><br>
						<div id="guest_1" style="margin: 10px 10px 10px 10px;"></div>
						clash订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&clash','guest_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&clash</a><br>
						<div id="guest_2" style="margin: 10px 10px 10px 10px;"></div>
						singbox订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&sb','guest_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&sb</a><br>
						<div id="guest_3" style="margin: 10px 10px 10px 10px;"></div>
						surge订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&surge','guest_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&surge</a><br>
						<div id="guest_4" style="margin: 10px 10px 10px 10px;"></div>
						loon订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&loon','guest_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&loon</a><br>
						<div id="guest_5" style="margin: 10px 10px 10px 10px;"></div>
					</div>
					---------------------------------------------------------------<br>
					################################################################<br>
					订阅转换配置<br>
					---------------------------------------------------------------<br>
					SUBAPI（订阅转换后端）: <strong>${subProtocol}://${subConverter}</strong><br>
					SUBCONFIG（订阅转换配置文件）: <strong>${subConfig}</strong><br>
					---------------------------------------------------------------<br>
					################################################################<br>
					${FileName} 汇聚订阅编辑: 
					<div class="editor-container">
						${hasKV ? `
						<textarea class="editor" 
							placeholder="${decodeURIComponent(atob('TElOSyVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNCVCOCVBQSVFOCU4QSU4MiVFNyU4MiVCOSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQp2bGVzcyUzQSUyRiUyRjI0NmFhNzk1LTA2MzctNGY0Yy04ZjY0LTJjOGZiMjRjMWJhZCU0MDEyNy4wLjAuMSUzQTEyMzQlM0ZlbmNyeXB0aW9uJTNEbm9uZSUyNnNlY3VyaXR5JTNEdGxzJTI2c25pJTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2YWxsb3dJbnNlY3VyZSUzRDElMjZ0eXBlJTNEd3MlMjZob3N0JTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2cGF0aCUzRCUyNTJGJTI1M0ZlZCUyNTNEMjU2MCUyM0NGbmF0CnRyb2phbiUzQSUyRiUyRmFhNmRkZDJmLWQxY2YtNGE1Mi1iYTFiLTI2NDBjNDFhNzg1NiU0MDIxOC4xOTAuMjMwLjIwNyUzQTQxMjg4JTNGc2VjdXJpdHklM0R0bHMlMjZzbmklM0RoazEyLmJpbGliaWxpLmNvbSUyNmFsbG93SW5zZWN1cmUlM0QxJTI2dHlwZSUzRHRjcCUyNmhlYWRlclR5cGUlM0Rub25lJTIzSEsKc3MlM0ElMkYlMkZZMmhoWTJoaE1qQXRhV1YwWmkxd2IyeDVNVE13TlRveVJYUlFjVzQyU0ZscVZVNWpTRzlvVEdaVmNFWlJkMjVtYWtORFVUVnRhREZ0U21SRlRVTkNkV04xVjFvNVVERjFaR3RTUzBodVZuaDFielUxYXpGTFdIb3lSbTgyYW5KbmRERTRWelkyYjNCMGVURmxOR0p0TVdwNlprTm1RbUklMjUzRCU0MDg0LjE5LjMxLjYzJTNBNTA4NDElMjNERQoKCiVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNiU5RCVBMSVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQpodHRwcyUzQSUyRiUyRnN1Yi54Zi5mcmVlLmhyJTJGYXV0bw=='))}"
							id="content">${content}</textarea>
						<div class="save-container">
							<button class="save-btn" onclick="saveContent(this)">保存</button>
							<span class="save-status" id="saveStatus"></span>
						</div>
						` : '<p>请绑定 <strong>变量名称</strong> 为 <strong>KV</strong> 的KV命名空间</p>'}
					</div>
					<br>
					################################################################<br>
					${decodeURIComponent(atob('dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGQ0YtV29ya2Vycy1TVUIlMjclM0VodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZjbWxpdSUyRkNGLVdvcmtlcnMtU1VCJTNDJTJGYSUzRSUzQ2JyJTNFCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUzQ2JyJTNFCiUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw=='))}
					<br><br>UA: <strong>${request.headers.get('User-Agent')}</strong>
					<script>
					function copyToClipboard(text, qrcode) {
						navigator.clipboard.writeText(text).then(() => {
							alert('已复制到剪贴板');
						}).catch(err => {
							console.error('复制失败:', err);
						});
						const qrcodeDiv = document.getElementById(qrcode);
						qrcodeDiv.innerHTML = '';
						new QRCode(qrcodeDiv, {
							text: text,
							width: 220, // 调整宽度
							height: 220, // 调整高度
							colorDark: "#000000", // 二维码颜色
							colorLight: "#ffffff", // 背景颜色
							correctLevel: QRCode.CorrectLevel.Q, // 设置纠错级别
							scale: 1 // 调整像素颗粒度
						});
					}
						
					if (document.querySelector('.editor')) {
						let timer;
						const textarea = document.getElementById('content');
						const originalContent = textarea.value;
		
						function goBack() {
							const currentUrl = window.location.href;
							const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
							window.location.href = parentUrl;
						}
		
						function replaceFullwidthColon() {
							const text = textarea.value;
							textarea.value = text.replace(/：/g, ':');
						}
						
						function saveContent(button) {
							try {
								const updateButtonText = (step) => {
									button.textContent = \`保存中: \${step}\`;
								};
								// 检测是否为iOS设备
								const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
								
								// 仅在非iOS设备上执行replaceFullwidthColon
								if (!isIOS) {
									replaceFullwidthColon();
								}
								updateButtonText('开始保存');
								button.disabled = true;

								// 获取textarea内容和原始内容
								const textarea = document.getElementById('content');
								if (!textarea) {
									throw new Error('找不到文本编辑区域');
								}

								updateButtonText('获取内容');
								let newContent;
								let originalContent;
								try {
									newContent = textarea.value || '';
									originalContent = textarea.defaultValue || '';
								} catch (e) {
									console.error('获取内容错误:', e);
									throw new Error('无法获取编辑内容');
								}

								updateButtonText('准备状态更新函数');
								const updateStatus = (message, isError = false) => {
									const statusElem = document.getElementById('saveStatus');
									if (statusElem) {
										statusElem.textContent = message;
										statusElem.style.color = isError ? 'red' : '#666';
									}
								};

								updateButtonText('准备按钮重置函数');
								const resetButton = () => {
									button.textContent = '保存';
									button.disabled = false;
								};

								if (newContent !== originalContent) {
									updateButtonText('发送保存请求');
									fetch(window.location.href, {
										method: 'POST',
										body: newContent,
										headers: {
											'Content-Type': 'text/plain;charset=UTF-8'
										},
										cache: 'no-cache'
									})
									.then(response => {
										updateButtonText('检查响应状态');
										if (!response.ok) {
											throw new Error(\`HTTP error! status: \${response.status}\`);
										}
										updateButtonText('更新保存状态');
										const now = new Date().toLocaleString();
										document.title = \`编辑已保存 \${now}\`;
										updateStatus(\`已保存 \${now}\`);
									})
									.catch(error => {
										updateButtonText('处理错误');
										console.error('Save error:', error);
										updateStatus(\`保存失败: \${error.message}\`, true);
									})
									.finally(() => {
										resetButton();
									});
								} else {
									updateButtonText('检查内容变化');
									updateStatus('内容未变化');
									resetButton();
								}
							} catch (error) {
								console.error('保存过程出错:', error);
								button.textContent = '保存';
								button.disabled = false;
								const statusElem = document.getElementById('saveStatus');
								if (statusElem) {
									statusElem.textContent = \`错误: \${error.message}\`;
									statusElem.style.color = 'red';
								}
							}
						}
		
						textarea.addEventListener('blur', saveContent);
						textarea.addEventListener('input', () => {
							clearTimeout(timer);
							timer = setTimeout(saveContent, 5000);
						});
					}

					function toggleNotice() {
						const noticeContent = document.getElementById('noticeContent');
						const noticeToggle = document.getElementById('noticeToggle');
						if (noticeContent.style.display === 'none' || noticeContent.style.display === '') {
							noticeContent.style.display = 'block';
							noticeToggle.textContent = '隐藏访客订阅∧';
						} else {
							noticeContent.style.display = 'none';
							noticeToggle.textContent = '查看访客订阅∨';
						}
					}
			
					// 初始化 noticeContent 的 display 属性
					document.addEventListener('DOMContentLoaded', () => {
						document.getElementById('noticeContent').style.display = 'none';
					});
					</script>
				</body>
			</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		console.error('处理请求时发生错误:', error);
		return new Response("服务器错误: " + error.message, {
			status: 500,
			headers: { "Content-Type": "text/plain;charset=utf-8" }
		});
	}

}




























