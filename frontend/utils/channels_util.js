export const fetchChannels = (server_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/servers/${server_id}/channels`
    })
);

export const createChannel = (channel, server_id) => (
    $.ajax({
        method: 'POST',
        url: `/api/servers/${server_id}/channels`,
        data: { channel }
    })
);