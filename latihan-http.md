# Membuat Permintaan
cURL atau Client URL merupakan software berbasis command line yang dapat melakukan transaksi data melalui beberapa protokol internet, salah satunya HTTP/S. cURL dapat diakses secara langsung tanpa proses install melalui Terminal (Linux dan Mac) atau CMD (Windows).
### GET
```shell
curl -X GET https://coffee-api.dicoding.dev/coffees -i
```

**Keterangan**:
- **curl**     : merupakan perintah untuk menggunakan program cURL pada Terminal atau CMD.
- **-X GET**    : menetapkan HTTP method/verb yang kita gunakan. GET berarti kita ingin mendapatkan sebuah data.
- https://coffee-api.dicoding.dev/coffees : merupakan alamat request yang dituju.
- **-i**        : memberikan informasi detail terhadap response yang diberikan (HTTP response headers).

**Response:**
```shell
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 06 Mar 2023 06:47:34 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 188
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache
accept-ranges: bytes

{"message":"Berikut daftar kopi yang tersedia","coffees":[{"id":1,"name":"Kopi Tubruk","price":12000},{"id":2,"name":"Kopi Tarik","price":15000},{"id":3,"name":"Kopi Jawa","price":18000}]}
```

**Keterangan:**
- HTTP/1.1 : merupakan HTTP version yang digunakan oleh web server dalam menanggapi permintaan.
- 200 : merupakan status code dari request. Karena status code diawali dengan angka 2, berarti request kita berhasil dilakukan.
- OK : merupakan pesan teks dari status code, 200 berarti “OK”.
- Content-Type: application/json; : merupakan tipe konten yang digunakan web server dalam memberikan data. Karena nilainya application/json, itu berarti server menggunakan format json.
- JSON Data (kode di bagian bawah) : merupakan data yang diberikan oleh web server. Kita bisa melihat web server memberikan informasi kopi yang tersedia beserta harganya menggunakan format JSON.


### POST
```shell
curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions -i
```

**Keterangan:**
- -X POST : dalam request kali ini kita menggunakan method POST. Karena membeli bukan hanya meminta data, tapi akan mengubah jumlah stok kopi yang ada. Selain itu kita juga melampirkan data berupa kopi apa yang akan dipesan. Sehingga tidak masuk akal bila kita menggunakan GET request.
- -H “Content-Type: application/json” : Menetapkan nilai “Content-Type: application/json” pada Header request. Fungsinya untuk memberitahu server bahwa kita melampirkan data dalam bentuk JSON.
- -d <JSON Content> : merupakan data yang dilampirkan pada request. Data ini berformat JSON dan memiliki informasi kopi apa yang ingin dipesan.
- https://coffee-api.dicoding.dev/transactions : Merupakan alamat request yang dituju untuk membeli kopi.

**Response:**
```shell
HTTP/1.1 201 Created
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 06 Mar 2023 07:02:11 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 46
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache

{"message":"Pesanan berhasil!","success":true}
```

**Keterangan:**
- -X POST : dalam request kali ini kita menggunakan method POST. Karena membeli bukan hanya meminta data, tapi akan mengubah jumlah stok kopi yang ada. Selain itu kita juga melampirkan data berupa kopi apa yang akan dipesan. Sehingga tidak masuk akal bila kita menggunakan GET request.
- -H “Content-Type: application/json” : Menetapkan nilai “Content-Type: application/json” pada Header request. Fungsinya untuk memberitahu server bahwa kita melampirkan data dalam bentuk JSON.
- -d <JSON Content> : merupakan data yang dilampirkan pada request. Data ini berformat JSON dan memiliki informasi kopi apa yang ingin dipesan.
- https://coffee-api.dicoding.dev/transactions : Merupakan alamat request yang dituju untuk membeli kopi.

```shell
curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Luwak\"}" https://coffee-api.dicoding.dev/transactions -i
```
**Response:**
```shell
HTTP/1.1 404 Not Found
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 06 Mar 2023 07:04:22 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 66
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache

{"message":"Pesanan gagal, kopi tidak ditemukan!","success":false}
```








