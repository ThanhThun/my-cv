# CV online – Huỳnh Thanh Thuận

## Cấu trúc (MVC)
```
index.html
css/style.css
js/config.js       <- chỉ sửa file này để khóa vị trí theo nhánh
js/model.js        <- Model: dữ liệu song ngữ, state, view-model
js/view.js         <- View: render DOM, bắt sự kiện click
js/controller.js   <- Controller: nối Model-View, URL hash, scroll-spy
js/main.js         <- khởi động
assets/photo.jpg   <- ảnh chân dung (thay file này để đổi ảnh)
```
Chạy thử: mở `index.html`, hoặc `python -m http.server` rồi vào http://localhost:8000

## Ẩn nút "Business Analyst | Manual Tester" và tách 2 nhánh
Chỉ cần sửa 1 dòng trong `js/config.js`:

| Nhánh    | Cấu hình                 | Kết quả                                  |
|----------|--------------------------|------------------------------------------|
| `main`   | `lockRole: null`         | Hiện nút chuyển cả 2 vị trí              |
| `ba`     | `lockRole: "ba"`         | Chỉ CV Business Analyst, ẩn nút chuyển   |
| `tester` | `lockRole: "tester"`     | Chỉ CV Manual Tester, ẩn nút chuyển      |

```bash
git init
git add .
git commit -m "CV online"
git branch -M main
git remote add origin <URL-repo>
git push -u origin main

# Nhánh BA
git checkout -b ba
# sửa js/config.js -> lockRole: "ba"
git commit -am "Lock role: BA"
git push -u origin ba

# Nhánh Tester
git checkout main
git checkout -b tester
# sửa js/config.js -> lockRole: "tester"
git commit -am "Lock role: Tester"
git push -u origin tester
```

## Sửa nội dung chung sau này
Sửa trên `main` (không đụng `config.js`), rồi đồng bộ sang 2 nhánh:
```bash
git checkout ba     && git merge main && git push
git checkout tester && git merge main && git push
```

## Deploy (Vercel)
Mỗi nhánh tự có Preview URL ổn định dạng `<project>-git-<branch>-<team>.vercel.app`.
Muốn link gọn hơn: tạo 2 project Vercel cùng repo, đặt Production Branch lần lượt là `ba` và `tester`.
