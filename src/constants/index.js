export const sidebarLinks = [
    {
        icon: 'MdOutlineDashboard',
        route: '/dashboard',
        label: 'Dashboard'
    }, {
        icon: 'RiTeamLine',
        route: '/teams',
        label: 'Manage Teams'
    }, {
        icon: 'GoLink',
        route: '/event-types',
        label: 'Manage Events'
    }, {
        icon: 'CiCalendar',
        route: '/bookings',
        label: 'Manage Sessions'
    }
]
export const recordedSidebarLinks = [
    // {
    //     icon: 'MdOutlineDashboard',
    //     route: '/dashboard',
    //     label: 'Dashboard'
    // }, 
    {
        icon: 'PiNewspaperLight',
        route: '/recorded-interview/manage-interviews',
        label: 'Manage Interviews'
    }, {
        icon: 'FaUsersBetweenLines',
        route: '/recorded-interview/manage-questions',
        label: 'Manage Questions'
    }
]

export const LiveSidebarLinks = [
    {
        icon: 'PiNewspaperLight',
        route: '/live-interview/manage-interview',
        label: 'Manage Interviews'
    }, {
        icon: 'FaUsersBetweenLines',
        route: '/live-interview/manage-interviewers',
        label: 'Manage Interviewers'
    }, {
        icon: 'CiCalendar',
        route: '/live-interview/manage-interview-bookings',
        label: 'Manage Interview Bookings'
    }
]

export const EventSettingsNavigation = [
    {
        heading: "Event Setup",
        subHeading: "time",
        icon: 'FaLink',
        route: 'event-setup'  
    },
    {
        heading: "Availability",
        subHeading: "Working Hours",
        icon: 'CiCalendar',
        route: 'availability'  
    },
    // {
    //     heading: "Limits",
    //     subHeading: "How often you can be booked",
    //     icon: 'IoMdTime',
    //     route: 'limits'  
    // }
]

export const BookingsSettingsNavigation = [
    {
        heading: "Upcoming",
    },
    {
        heading: "Past",  
    },
    {
        heading: "Cancelled",  
    }
]

export const InterviewBookings = [
    {
        heading: "Upcoming",
    },
    {
        heading: "Past",  
    }, {
        heading: "Canceled",  
    }
]
export const liveInterviewTabs = [
    {
        heading: "Create interview",
    },
    {
        heading: "Scheduler interview",  
    },
    {
        heading: "Criteia",  
    }
]

export const NEXT_ACTION = {
    SET_PROFILE : "SET_PROFILE",
    SET_OAUTH: "SET_OAUTH",
    SET_AVAILABILITY : "SET_AVAILABILITY",
    SET_AVATAR: "SET_AVATAR",
    NONE: "none"
}


export const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };