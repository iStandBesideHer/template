iStandBesideHer Template
========================

To deploy
- git commit local changes
- git push origin master


Add an image
------------
`
curl 'https://istandbesideher.squarespace.com/api/uploads/images?crumb=BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh' -H 'origin: https://istandbesideher.squarespace.com' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.8' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36' -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundaryuLJtZiE5HbOhDSGu' -H 'accept: */*' -H 'referer: https://istandbesideher.squarespace.com/config/pages' -H 'authority: istandbesideher.squarespace.com' -H 'cookie: SS_MID=f0ad2a18-b7a3-4840-824c-fb244751cf27izdmkfmz; seven_frame_expanded=true; SS_ABPP=harris_taylor%3A-1193224492=Harris+with+customer+examples; SS_MATTR=eyJ2IjoyLCJhIjpbImRpcmVjdCIsIiIsIiIsIiIsIiJdLCJkIjoiMjAxNy0wMi0yOCAxNzo1NDozOC4zMjQifQ==; ss_cvr=5f228542-2501-433c-bffa-b83ed0b53ab2|1488316265995|1488316265995|1488355117928|2; __utma=46467109.1473657420.1487566302.1488316282.1488355926.8; __utmc=46467109; __utmz=46467109.1487566302.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); secureauthtoken=0533d83f-e922-429f-86e8-b4f80ab34731&UNSPO9GWXY; secureredirect=true; crumb=BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh; ss_cid=cfce2d79-75b1-4902-b205-a0509669e9be; ss_cpvisit=1488792166576; _ga=GA1.2.1473657420.1487566302; ss_lastid=eyJpZGVudGlmaWVyIjoiaXN0YW5kYmVzaWRlaGVyIn0%3D; _ga=GA1.3.1473657420.1487566302; __zlcmid=fBgEwZxkl1NA5c; JSESSIONID=6if3elRfch-VE9ih4dEjoaLrtUS45mqLKGHrPToSkH8i9ROQFE_Ssg' --data-binary $'------WebKitFormBoundaryuLJtZiE5HbOhDSGu\r\nContent-Disposition: form-data; name="process"\r\n\r\ntrue\r\n------WebKitFormBoundaryuLJtZiE5HbOhDSGu\r\nContent-Disposition: form-data; name="contentType"\r\n\r\nimage\r\n------WebKitFormBoundaryuLJtZiE5HbOhDSGu\r\nContent-Disposition: form-data; name="fileName"\r\n\r\n20161121_173558.jpg\r\n------WebKitFormBoundaryuLJtZiE5HbOhDSGu\r\nContent-Disposition: form-data; name="fileSize"\r\n\r\n5176033\r\n------WebKitFormBoundaryuLJtZiE5HbOhDSGu\r\nContent-Disposition: form-data; name="Filedata"; filename="20161121_173558.jpg"\r\nContent-Type: image/jpeg\r\n\r\n\r\n------WebKitFormBoundaryuLJtZiE5HbOhDSGu--\r\n' --compressed ;

curl 'https://istandbesideher.squarespace.com/api/rest/jobs/?id=58bda9b02994ca1d92732e7b' -H 'accept-encoding: gzip, deflate, sdch, br' -H 'x-csrf-token: BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh' -H 'accept-language: en-US,en;q=0.8' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36' -H 'accept: application/json, text/plain, */*' -H 'referer: https://istandbesideher.squarespace.com/config/pages' -H 'authority: istandbesideher.squarespace.com' -H 'cookie: SS_MID=f0ad2a18-b7a3-4840-824c-fb244751cf27izdmkfmz; seven_frame_expanded=true; SS_ABPP=harris_taylor%3A-1193224492=Harris+with+customer+examples; SS_MATTR=eyJ2IjoyLCJhIjpbImRpcmVjdCIsIiIsIiIsIiIsIiJdLCJkIjoiMjAxNy0wMi0yOCAxNzo1NDozOC4zMjQifQ==; ss_cvr=5f228542-2501-433c-bffa-b83ed0b53ab2|1488316265995|1488316265995|1488355117928|2; __utma=46467109.1473657420.1487566302.1488316282.1488355926.8; __utmc=46467109; __utmz=46467109.1487566302.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); secureauthtoken=0533d83f-e922-429f-86e8-b4f80ab34731&UNSPO9GWXY; secureredirect=true; crumb=BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh; ss_cid=cfce2d79-75b1-4902-b205-a0509669e9be; ss_cpvisit=1488792166576; _ga=GA1.2.1473657420.1487566302; ss_lastid=eyJpZGVudGlmaWVyIjoiaXN0YW5kYmVzaWRlaGVyIn0%3D; _ga=GA1.3.1473657420.1487566302; __zlcmid=fBgEwZxkl1NA5c; JSESSIONID=6if3elRfch-VE9ih4dEjoaLrtUS45mqLKGHrPToSkH8i9ROQFE_Ssg' --compressed ;

curl 'https://istandbesideher.squarespace.com/api/rest/jobs/?id=58bda9b02994ca1d92732e7b' -H 'accept-encoding: gzip, deflate, sdch, br' -H 'x-csrf-token: BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh' -H 'accept-language: en-US,en;q=0.8' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36' -H 'accept: application/json, text/plain, */*' -H 'referer: https://istandbesideher.squarespace.com/config/pages' -H 'authority: istandbesideher.squarespace.com' -H 'cookie: SS_MID=f0ad2a18-b7a3-4840-824c-fb244751cf27izdmkfmz; seven_frame_expanded=true; SS_ABPP=harris_taylor%3A-1193224492=Harris+with+customer+examples; SS_MATTR=eyJ2IjoyLCJhIjpbImRpcmVjdCIsIiIsIiIsIiIsIiJdLCJkIjoiMjAxNy0wMi0yOCAxNzo1NDozOC4zMjQifQ==; ss_cvr=5f228542-2501-433c-bffa-b83ed0b53ab2|1488316265995|1488316265995|1488355117928|2; __utma=46467109.1473657420.1487566302.1488316282.1488355926.8; __utmc=46467109; __utmz=46467109.1487566302.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); secureauthtoken=0533d83f-e922-429f-86e8-b4f80ab34731&UNSPO9GWXY; secureredirect=true; crumb=BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh; ss_cid=cfce2d79-75b1-4902-b205-a0509669e9be; ss_cpvisit=1488792166576; _ga=GA1.2.1473657420.1487566302; ss_lastid=eyJpZGVudGlmaWVyIjoiaXN0YW5kYmVzaWRlaGVyIn0%3D; _ga=GA1.3.1473657420.1487566302; __zlcmid=fBgEwZxkl1NA5c; JSESSIONID=6if3elRfch-VE9ih4dEjoaLrtUS45mqLKGHrPToSkH8i9ROQFE_Ssg' --compressed ;

curl 'https://istandbesideher.squarespace.com/api/rest/jobs/?id=58bda9b02994ca1d92732e7b' -H 'accept-encoding: gzip, deflate, sdch, br' -H 'x-csrf-token: BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh' -H 'accept-language: en-US,en;q=0.8' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36' -H 'accept: application/json, text/plain, */*' -H 'referer: https://istandbesideher.squarespace.com/config/pages' -H 'authority: istandbesideher.squarespace.com' -H 'cookie: SS_MID=f0ad2a18-b7a3-4840-824c-fb244751cf27izdmkfmz; seven_frame_expanded=true; SS_ABPP=harris_taylor%3A-1193224492=Harris+with+customer+examples; SS_MATTR=eyJ2IjoyLCJhIjpbImRpcmVjdCIsIiIsIiIsIiIsIiJdLCJkIjoiMjAxNy0wMi0yOCAxNzo1NDozOC4zMjQifQ==; ss_cvr=5f228542-2501-433c-bffa-b83ed0b53ab2|1488316265995|1488316265995|1488355117928|2; __utma=46467109.1473657420.1487566302.1488316282.1488355926.8; __utmc=46467109; __utmz=46467109.1487566302.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); secureauthtoken=0533d83f-e922-429f-86e8-b4f80ab34731&UNSPO9GWXY; secureredirect=true; crumb=BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh; ss_cid=cfce2d79-75b1-4902-b205-a0509669e9be; ss_cpvisit=1488792166576; _ga=GA1.2.1473657420.1487566302; ss_lastid=eyJpZGVudGlmaWVyIjoiaXN0YW5kYmVzaWRlaGVyIn0%3D; _ga=GA1.3.1473657420.1487566302; __zlcmid=fBgEwZxkl1NA5c; JSESSIONID=6if3elRfch-VE9ih4dEjoaLrtUS45mqLKGHrPToSkH8i9ROQFE_Ssg' --compressed ;

curl 'https://istandbesideher.squarespace.com/api/rest/jobs/?id=58bda9b02994ca1d92732e7b' -H 'accept-encoding: gzip, deflate, sdch, br' -H 'x-csrf-token: BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh' -H 'accept-language: en-US,en;q=0.8' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36' -H 'accept: application/json, text/plain, */*' -H 'referer: https://istandbesideher.squarespace.com/config/pages' -H 'authority: istandbesideher.squarespace.com' -H 'cookie: SS_MID=f0ad2a18-b7a3-4840-824c-fb244751cf27izdmkfmz; seven_frame_expanded=true; SS_ABPP=harris_taylor%3A-1193224492=Harris+with+customer+examples; SS_MATTR=eyJ2IjoyLCJhIjpbImRpcmVjdCIsIiIsIiIsIiIsIiJdLCJkIjoiMjAxNy0wMi0yOCAxNzo1NDozOC4zMjQifQ==; ss_cvr=5f228542-2501-433c-bffa-b83ed0b53ab2|1488316265995|1488316265995|1488355117928|2; __utma=46467109.1473657420.1487566302.1488316282.1488355926.8; __utmc=46467109; __utmz=46467109.1487566302.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); secureauthtoken=0533d83f-e922-429f-86e8-b4f80ab34731&UNSPO9GWXY; secureredirect=true; crumb=BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh; ss_cid=cfce2d79-75b1-4902-b205-a0509669e9be; ss_cpvisit=1488792166576; _ga=GA1.2.1473657420.1487566302; ss_lastid=eyJpZGVudGlmaWVyIjoiaXN0YW5kYmVzaWRlaGVyIn0%3D; _ga=GA1.3.1473657420.1487566302; __zlcmid=fBgEwZxkl1NA5c; JSESSIONID=6if3elRfch-VE9ih4dEjoaLrtUS45mqLKGHrPToSkH8i9ROQFE_Ssg' --compressed ;

curl 'https://istandbesideher.squarespace.com/api/content-collections/58bda957e6f2e1592cbbaf85/content-items/58bda9a32994ca1d92732d99' -H 'accept-encoding: gzip, deflate, sdch, br' -H 'x-csrf-token: BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh' -H 'accept-language: en-US,en;q=0.8' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36' -H 'accept: application/json, text/plain, */*' -H 'referer: https://istandbesideher.squarespace.com/config/pages' -H 'authority: istandbesideher.squarespace.com' -H 'cookie: SS_MID=f0ad2a18-b7a3-4840-824c-fb244751cf27izdmkfmz; seven_frame_expanded=true; SS_ABPP=harris_taylor%3A-1193224492=Harris+with+customer+examples; SS_MATTR=eyJ2IjoyLCJhIjpbImRpcmVjdCIsIiIsIiIsIiIsIiJdLCJkIjoiMjAxNy0wMi0yOCAxNzo1NDozOC4zMjQifQ==; ss_cvr=5f228542-2501-433c-bffa-b83ed0b53ab2|1488316265995|1488316265995|1488355117928|2; __utma=46467109.1473657420.1487566302.1488316282.1488355926.8; __utmc=46467109; __utmz=46467109.1487566302.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); secureauthtoken=0533d83f-e922-429f-86e8-b4f80ab34731&UNSPO9GWXY; secureredirect=true; crumb=BGk3Thn_9qXRMjljZTE2OGVjNWFjMTU5MzBmNTJjNzUzYjY0MzNh; ss_cid=cfce2d79-75b1-4902-b205-a0509669e9be; ss_cpvisit=1488792166576; _ga=GA1.2.1473657420.1487566302; ss_lastid=eyJpZGVudGlmaWVyIjoiaXN0YW5kYmVzaWRlaGVyIn0%3D; _ga=GA1.3.1473657420.1487566302; __zlcmid=fBgEwZxkl1NA5c; JSESSIONID=6if3elRfch-VE9ih4dEjoaLrtUS45mqLKGHrPToSkH8i9ROQFE_Ssg' --compressed ;

curl 'https://static1.squarespace.com/static/58aa7ab359cc68ccc504b8af/t/58bda9a32994ca1d92732d99/1488824761242/20161121_173558.jpg?format=500w' -H 'accept-encoding: gzip, deflate, sdch, br' -H 'accept-language: en-US,en;q=0.8' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36' -H 'accept: image/webp,image/*,*/*;q=0.8' -H 'referer: https://istandbesideher.squarespace.com/new-page' -H 'authority: static1.squarespace.com' -H 'cookie: SS_MID=f0ad2a18-b7a3-4840-824c-fb244751cf27izdmkfmz; SS_ABPP=harris_taylor%3A-1193224492=Harris+with+customer+examples; SS_MATTR=eyJ2IjoyLCJhIjpbImRpcmVjdCIsIiIsIiIsIiIsIiJdLCJkIjoiMjAxNy0wMi0yOCAxNzo1NDozOC4zMjQifQ==; __utma=46467109.1473657420.1487566302.1488316282.1488355926.8; __utmc=46467109; __utmz=46467109.1487566302.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _ga=GA1.2.1473657420.1487566302; ss_lastid=eyJpZGVudGlmaWVyIjoiaXN0YW5kYmVzaWRlaGVyIn0%3D; __zlcmid=fBgEwZxkl1NA5c' --compressed

