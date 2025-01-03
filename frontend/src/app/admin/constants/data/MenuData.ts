import home from "@/app/assets/common/icons/home.png"
import teacher from "@/app/assets/common/icons/teacher.png"
import student from "@/app/assets/common/icons/student.png"
import parent from "@/app/assets/common/icons/parent.png"
import subject from "@/app/assets/common/icons/subject.png"
import classed from "@/app/assets/common/icons/class.png"
import lesson from "@/app/assets/common/icons/lesson.png"
import exam from "@/app/assets/common/icons/exam.png"
import assignment from "@/app/assets/common/icons/assignment.png"
import result from "@/app/assets/common/icons/result.png"
import attendance from "@/app/assets/common/icons/attendance.png"
import calendar from "@/app/assets/common/icons/calendar.png"
import message from "@/app/assets/common/icons/message.png"
import profile from "@/app/assets/common/icons/profile.png"
import setting from "@/app/assets/common/icons/setting.png"
import logout from "@/app/assets/common/icons/logout.png"
import announcement from "@/app/assets/common/icons/announcement.png"
import { StaticImageData } from "next/image";



type MenuItem = {
    icon: string | StaticImageData; // Đường dẫn tới icon
    label: string; // Tên hiển thị của menu
    href: string; // Đường dẫn của menu
    visible: string[]; // Các vai trò (roles) được phép nhìn thấy menu
}

interface IMenuNavBar {
    title: string;
    items: MenuItem[];
}

export const menuItems: Array<IMenuNavBar> = [
    {
        title: "MENU",
        items: [
            {
                icon: home,
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: teacher,
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: student,
                label: "Students",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: parent,
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: subject,
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: classed,
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: lesson,
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: exam,
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            // {
            //     icon: assignment,
            //     label: "Assignments",
            //     href: "/list/assignments",
            //     visible: ["admin", "teacher", "student", "parent"],
            // },
            // {
            //     icon: result,
            //     label: "Results",
            //     href: "/list/results",
            //     visible: ["admin", "teacher", "student", "parent"],
            // },
            // {
            //     icon: attendance,
            //     label: "Attendance",
            //     href: "/list/attendance",
            //     visible: ["admin", "teacher", "student", "parent"],
            // },
            // {
            //     icon: calendar,
            //     label: "Events",
            //     href: "/list/events",
            //     visible: ["admin", "teacher", "student", "parent"],
            // },
            // {
            //     icon: message,
            //     label: "Messages",
            //     href: "/list/messages",
            //     visible: ["admin", "teacher", "student", "parent"],
            // },
            // {
            //     icon: announcement,
            //     label: "Announcements",
            //     href: "/list/announcements",
            //     visible: ["admin", "teacher", "student", "parent"],
            // },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: profile,
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: setting,
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: logout,
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];