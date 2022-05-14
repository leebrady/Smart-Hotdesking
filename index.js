$(() => {
    const scheduler = $('#scheduler').dxScheduler({
        timeZone: 'Europe/Dublin',
        dataSource: data,
        views: ['day', 'workWeek', 'month'],
        currentView: 'workWeek',
        currentDate: new Date(),
        startDayHour: 9,
        endDayHour: 22,
        resources: [{
            fieldExpr: 'deskId',
            dataSource: desks,
            label: 'Desk',
        }, {
            fieldExpr: 'importanceId',
            dataSource: importance,
            label: 'Importance',
        }, {
            fieldExpr: 'employeeId',
            dataSource: employees,
            label: 'Employee',
        }],
        height: 800,
    }).dxScheduler('instance');

    $('#resources-selector').dxRadioGroup({
        items: resourcesList,
        value: resourcesList[0],
        layout: 'horizontal',
        onValueChanged(e) {
            const resources = scheduler.option('resources');

            for (let i = 0; i < resources.length; i += 1) {
                resources[i].useColorAsDefault = resources[i].label === e.value;
            }

            scheduler.repaint();
        },
    });
});