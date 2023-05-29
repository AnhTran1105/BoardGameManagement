# BoardGameManagement
## Backend
### Techstack & Development tool
* Ngôn ngữ: Java 
* Framework: Spring Boot
* Database: PostgreSQL
* Mô hình: Microservice
* Các công cụ hỗ trợ: Git, Fork, Docker, Postman, VSCode
### Các nhóm services (gồm 6 services):
* Gateway: Gateway của các service.
* Auth service: service cho người quản lí (Manager) thực hiện Authentication và Authorization, cùng các chức năng đăng nhập, đăng kí, chỉnh sửa thông tin bản thân...
* User service: service dành cho những người sử dụng dịch vụ thuê boardgame (User) của cửa hàng, để Manager có thể quản lí các User.
* Contract service: service về hợp đồng (contract) giữa bên thuê và bên cho thuê.
* Boardgame service: service để quản lí boardgame.
* Membercard service: service để quản lí thẻ thành viên của các User.
### Gateway, Service Port
* Sử dụng Spring Cloud Gateway tại port 8080.
* Auth service port 8081
* User service port 8082
* Contract service port 8083
* Boardgame service port 8084
* Membercard service port 8085
* Apache Kafka port 9092 (Có chức năng thực hiện cầu nối giữa các service)
* Database port 5432
### Cách khởi động server
* Tại folder boardgame-microservice-backend, command "docker-compose up -d" (Chỉ cần có tải Docker về máy)
