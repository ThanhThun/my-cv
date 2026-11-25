/* ============ MODEL: dữ liệu, trạng thái, view-model ============ */
const Model = {
  photo: "assets/photo.jpg",
  state: { role: CONFIG.lockRole || "ba", lang: "vi" },
  subs: [],
  subscribe(fn) { this.subs.push(fn); },
  set(patch) { Object.assign(this.state, patch); this.subs.forEach(fn => fn(this.state)); },
  data: {
    name: "Huỳnh Thanh Thuận",
    contact: { phone: "0392 258 823", email: "thanhthuan.dev@gmail.com" },
    nav: [["home","Trang chủ","Home"],["summary","Tóm tắt","Summary"],["skills","Kỹ năng","Skills"],["exp","Kinh nghiệm","Experience"],["edu","Học vấn","Education"],["contact","Liên hệ","Contact"]],
    roles: [["ba","Business Analyst"],["tester","Manual Tester"]],
    langs: [["vi","Tiếng Việt"],["en","English"]],
    title: { ba: "Business Analyst", tester: "Manual Tester" },
    ui: {
      hi: ["Xin chào!","Hi!"], name: ["Họ tên","Name"], pos: ["Vị trí","Position"], loc: ["Nơi ở","Location"],
      phone: ["Điện thoại","Phone"], mail: ["E-mail","E-mail"], edu: ["Học vấn","Education"],
      city: ["TP. Hồ Chí Minh","Ho Chi Minh City"], summary: ["Tóm tắt","Summary"], skills: ["Kỹ năng chính","Key skills"],
      exp: ["Kinh nghiệm làm việc","Work experience"], cert: ["Chứng chỉ","Certifications"], contact: ["Liên hệ","Contact"]
    },
    sum: {
      ba: ["Trainee & Business Intelligence với 1 năm kinh nghiệm UAT, phân tích lỗi và báo cáo dữ liệu trên ứng dụng field-force của Samsung (2.000+ người dùng) tại Smollan Vietnam. Là cầu nối giữa người dùng cuối và đội phát triển offshore tại Ấn Độ, phân loại 20+ vấn đề mỗi tuần, bổ sung test case cho các bản phát hành mới, dùng SQL Server và Excel để kiểm tra độ chính xác dữ liệu và báo cáo tỷ lệ lỗi.",
           "Trainee & Business Intelligence with 1 year of experience in UAT, defect analysis, and data reporting on Samsung’s field-force application (2,000+ users) at Smollan Vietnam. Acts as the link between end users and an offshore development team in India, triages 20+ issues weekly, adds test cases for new releases, and uses SQL Server and Excel to verify data accuracy and report error rates."],
      tester: ["Tester entry-level với hơn 1 năm kinh nghiệm UAT và báo cáo lỗi trên ứng dụng field-force của dự án Samsung tại Smollan Vietnam (2.000+ người dùng). Tái hiện và ghi nhận lỗi cho đội phát triển offshore tại Ấn Độ, viết test case cho các bản phát hành tính năng mới, dùng SQL Server để kiểm tra độ chính xác dữ liệu. Đang tìm vị trí Intern Tester để phát triển theo hướng QA bài bản.",
           "Entry-level tester with 1+ year of hands-on UAT and defect reporting experience on a field-force application for the Samsung project at Smollan Vietnam, used by 2,000+ users. Reproduced and documented defects for an offshore development team in India, wrote test cases for new feature releases, and used SQL Server to verify data accuracy. Seeking an Intern Tester role to grow into structured QA practice."]
    },
    skills: {
      ba: [["Testing",["UAT","Test Case Design","Root Cause Analysis","Stakeholder Communication"]],["Data",["SQL Server","Excel (PivotTables)","Data Validation"]],["Tools",["MS & Google Tools","Git","Postman","FileZilla (FTP)"]]],
      tester: [["Testing",["UAT","Test Case Design","Defect Reproduction","Bug Triage"]],["Data",["SQL Server","Excel (PivotTables)","Data Validation"]],["Tools",["Google Sheets","Google Calendar","FileZilla (FTP)"]]]
    },
    b: {
      triage: ["Phân loại 20+ vấn đề mỗi tuần từ 2.000+ người dùng hiện trường, tách lỗi do người dùng khỏi lỗi thực sự của ứng dụng, duy trì tỷ lệ xử lý trong ngày trên 98%.","Triaged 20+ issues per week from 2,000+ field users, separating user errors from genuine application defects, and maintained a 98%+ same-day resolution rate."],
      triageT: ["Phân loại và hướng dẫn 20 vấn đề mỗi tuần, duy trì tỷ lệ xử lý trong ngày trên 98%, tách lỗi do người dùng khỏi lỗi thực sự của ứng dụng.","Triaged and guided 20 issues per week and kept a 98%+ same-day resolution rate, separating user errors from genuine application defects."],
      repro: ["Tái hiện các lỗi ứng dụng do 2.000+ người dùng hiện trường báo cáo và ghi nhận lại cho đội phát triển offshore tại Ấn Độ.","Reproduced application defects reported by 2,000+ field users and documented them for the offshore development team in India."],
      uat: ["Kiểm thử tính năng mới trong giai đoạn UAT và bổ sung test case còn thiếu mỗi khi bản phát hành có chức năng mới.","Tested new features during UAT and added missing test cases whenever a release introduced new functionality."],
      sql: ["Kiểm tra độ chính xác dữ liệu bằng truy vấn SQL Server để tìm bản ghi sai và thiếu; báo cáo tỷ lệ lỗi hằng tuần bằng Excel PivotTable.","Verified data accuracy with SQL Server queries to isolate inaccurate and missing records; reported weekly error rates via Excel PivotTables."],
      guide: ["Viết tài liệu hướng dẫn người dùng và onboard nhân sự mới, giảm 20% lỗi lặp lại.","Wrote user guides and onboarded new staff, cutting recurring errors by 20%."],
      kpi: ["Kiểm tra tính đầy đủ của file KPI import trước khi tải lên hằng tháng qua FTP.","Checked KPI import files for completeness before loading them monthly via FTP."],
      kpiT: ["Kiểm tra tính đầy đủ của file KPI import trước khi tải lên hai lần mỗi tháng qua FTP (FileZilla).","Checked KPI import files for completeness before loading them twice monthly via FTP (FileZilla)."]
    },
    smollan: { ba: ["triage","repro","uat","sql","guide","kpi"], tester: ["repro","uat","sql","triageT","guide","kpiT"] },
    ezcon: [
      ["Đóng góp ~10% phạm vi dự án ứng dụng ví tiền mã hóa","Contributed ~10% of project scope on a cryptocurrency wallet application"],
      ["Xây dựng website giới thiệu sản phẩm trên nền tảng .NET","Built a product introduction website on the .NET framework"],
      ["Theo dõi công việc và deadline cho nhóm 4 người bằng Google Sheets, Google Calendar.","Tracked tasks and deadlines for a 4-person team using Google Sheets, Google Calendar."]
    ]
  },
  // Chuyển state hiện tại thành dữ liệu đã dịch, sẵn sàng cho View
  vm() {
    const { role, lang } = this.state, d = this.data, i = lang === "vi" ? 0 : 1, p = a => a[i];
    const ui = {}; for (const k in d.ui) ui[k] = p(d.ui[k]);
    return {
      role, lang, ui, name: d.name, contact: d.contact, photo: this.photo,
      nav: d.nav.map(n => [n[0], n[1 + i]]), roles: d.roles, langs: d.langs,
      title: d.title[role], sum: p(d.sum[role]), skills: d.skills[role],
      jobs: [
        { co: "Smollan Vietnam Joint Stock Company", date: ["Tháng 6/2025 – Tháng 8/2026","Jun 2025 – Aug 2026"][i],
          role: ["Chuyên viên Business Intelligence (Dự án: Samsung)","Business Intelligence Specialist (Project: Samsung)"][i],
          items: d.smollan[role].map(k => p(d.b[k])) },
        { co: "EZCON Technology Solutions Co., Ltd.", date: ["Tháng 3/2024 – Tháng 9/2024","Mar 2024 – Sep 2024"][i],
          role: ["Thực tập sinh Business Analyst (Dự án: JW Coin – Ton Meme)","Intern Business Analyst (Project: JW Coin – Ton Meme)"][i],
          items: d.ezcon.map(p) }
      ],
      edu: { school: "iSPACE College of Cybersecurity", major: ["Kỹ sư thực hành Lập trình máy tính","Practical Engineer in Computer Programming"][i], date: ["11/2021 – 05/2025","Nov 2021 – May 2025"][i],
             cert: "AWS Academy Cloud Foundations", certDate: ["Tháng 1/2024","January 2024"][i] }
    };
  }
};
