---
title: Main Feature
description: Tutorial Menggunakan Fitur
---

## Stalk

Gunakan perintah `/stalk` untuk menampilkan informasi detail dari user tertentu menggunakan **UID**.

### Contoh Penggunaan
```bash
/stalk <uid>
/stalk 12345678
```

### Response Success
```
Nickname: RENZ4YOUㅤPC
Likes: 27087
Region: ID
Level: 99
```

### Response Failed
```
Player: Not Found
```

---

## Like

Gunakan perintah `/like` untuk menyukai profil sendiri atau user lain menggunakan **UID**.

### Contoh Penggunaan
```bash
/like <uid>
/like 12345678
```

### Response Success
```
Nickname: RENZ4YOUㅤPC
Likes Given: 100
Before Likes: 27087
After Likes: 27187
Region: ID
Level: 99
```

### Response Failed
```
UID ini sudah menerima batas like hari ini.
```

---

## Spad (Maintenance)

Gunakan perintah `/spad` — fitur ini **Untuk Spam Add Friend Ke akun Target**.

### Contoh Penggunaan
```bash
/spad <uid>
/spad 12345678
```

### Response Success
```
Success : 100
Region: ID
Level: 99
```

### Response Failed
```
Failed To Send Spad Request addFriend Full
```

---

## Visit

Gunakan perintah `/visit` untuk menambah views profil sendiri atau user lain menggunakan **UID**.

### Contoh Penggunaan
```bash
/visit <uid>
/visit 12345678
```

### Response Success (Before)
```
Nickname: RENZ4YOUㅤPC
Visit Before: 1000
Region: ID
Level: 99
```

### Response Success (After)
```
Nickname: RENZ4YOUㅤPC
Visit After: 0
Region: ID
Level: 99
```

### Response Failed
```
Visit Sudah Mencapai Batas
```
