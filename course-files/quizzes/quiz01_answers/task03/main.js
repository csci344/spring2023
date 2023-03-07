// Search for Tweets: https://www.apitutor.org/twitter/simple/1.1/search/tweets.json?q=cats&count=3 
// Search for users: https://www.apitutor.org/twitter/1.1/users/show.json?screen_name=vanwars  


const getStatuses = async (term, count) => {
    const url = `https://www.apitutor.org/twitter/simple/1.1/search/tweets.json?q=${term}&count=${count}&result_type=popular`;
    const response = await fetch(url);
    return await response.json();
}

const getUserDetails = async username => {
    const url = `https://www.apitutor.org/twitter/1.1/users/show.json?screen_name=${username}`;
    const response = await fetch(url);
    return await response.json();
}

const statusToHTML = status => {
    return `
        <section class="status" id="status_${status.id}">
            <p><strong>@${status.screen_name}</strong> ${status.text}</p>
            <button onclick="displayUserDetail('status_${status.id}', '${status.screen_name}')">more</button>
            <div class="more"></div>
        </section>
    `
}

const userToHTML = user => {
    return `
        <section class="user">
            <div class="header">
                ${user.profile_image_url ? `<img src="${user.profile_image_url}" alt="Profile image" />` : ''}
                <h3>${user.name}
                    ${user.verified ? '<i class="fa-solid fa-circle-check"></i>' : '' }              
                </h3>
            </div>
            <p><strong>${user.followers_count}</strong> followers</p>
            <p><strong>${user.friends_count}</strong> following</p>
        </section>
    `;
}

const displayMatchingStatuses = async () => {
    const term = document.querySelector('#term').value;
    const count = document.querySelector('#count').value;
    const statuses = await getStatuses(term, count);
    console.log(statuses);
    document.querySelector('main').innerHTML = statuses.map(statusToHTML).join('');
}

const displayUserDetail = async (id, username) => {
    const user = await getUserDetails(username);
    console.log(user);
    document.querySelector(`#${id} .more`).innerHTML = userToHTML(user);
    document.querySelector(`#${id}`).style.backgroundColor = '#c0deed';
}


const search = async ev => {
    const username = document.querySelector('#username').value;
    const repoList = await getRepos(username);
    const targetEl = document.querySelector('main');
    targetEl.innerHTML = repoList.map(repoToHtml).join('');
}