const resourcesList = ['Employee', 'Desk', 'Importance'];
const data = [{
    text: 'All Day Booking',
    employeeId: 4,
    deskId: 1,
    importanceId: [2],
    startDate: new Date('2022-05-19T16:30:00.000Z'),
    endDate: new Date('2022-05-19T18:30:00.000Z'),
    allDay: true,
}, {
    text: 'Half Day Booking',
    employeeId: 2,
    deskId: 2,
    importanceId: [1],
    startDate: new Date('2022-05-18T09:30:00.000Z'),
    endDate: new Date('2022-05-18T13:30:00.000Z'),
}, {
    text: 'Morning Booking For X-Team Meeting',
    employeeId: 1,
    deskId: 3,
    importanceId: [2],
    startDate: new Date('2022-05-17T08:00:00.000Z'),
    endDate: new Date('2022-05-17T10:00:00.000Z'),
}];
const employees = [{
    text: 'Lee Brady',
    id: 1,
    color: '#FF1133',
}, {
    text: 'Sean Memery',
    id: 2,
    color: '#11AAFF',
}, {
    text: 'Craig Nolan',
    id: 3,
    color: '#FFDD11',
}, {
    text: 'Adam Breen',
    id: 4,
    color: '#FF6611',
}, ];

const desks = [{
    text: 'Desk 1',
    id: 1,
    color: '#56a6ef',
}, {
    text: 'Desk 2',
    id: 2,
    color: '#4cd182',
}, {
    text: 'Desk 3',
    id: 3,
    color: '#fdb200',
}];

const importance = [{
    text: 'High',
    id: 1,
    color: '#cc5c53',
}, {
    text: 'Low',
    id: 2,
    color: '#ff9747',
}, ];
