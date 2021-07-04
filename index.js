var users =
[
    {
        "name":"abc",
        "age":10,
        "DOB":"13-8-2001",
        "firstName":"ab",
        "Lastname":"c",
        "More":
        {
            "addressline1":"1po",
            "addressline2":"2po",
            "addressline3":"3po",
            "Phone": 123456789
        }
    },
    {
        "name":"def",
        "age":10,
        "DOB":"12-8-2002",
        "firstName":"de",
        "Lastname":"f",
        "More":
        {
            "addressline1":"3pi",
            "addressline2":"4pi",
            "addressline3":"5pi",
            "Phone": 123456789
        }
    },
    {
        "name":"xyz",
        "age":10,
        "DOB":"10-8-2001",
        "firstName":"xy",
        "Lastname":"z",
        "More":
        {
            "addressline1":"qw1",
            "addressline2":"qw2",
            "addressline3":"qw3",
            "Phone": 123456789
        }
    }
]


async function getUsers() {
    let url = 'http://127.0.0.1:3000/info';
    try {
        let res = await fetch(url,{mode: 'cors'});
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderUsers() {
    //let users = await getUsers();
    console.log("users: ",users)
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <li>"${user.name}" </li>
                            <h2>${user.firstName} ${user.Lastname}</h2>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();