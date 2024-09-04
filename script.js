fetch('https://opencollective.com/webpack/members.json?limit=10&offset=0')
    .then(response => response.json())
    .then(data => {
        const containers = document.querySelectorAll('.container');

        data.forEach((member, index) => {
            if (index < containers.length) {
                const container = containers[index];
                const img = container.querySelector('img');
                const h2 = container.querySelector('h2');
                const p = container.querySelectorAll('p');

                img.src = member.image || 'default-image.png';
                h2.textContent = member.name || 'No Name';
                p[0].innerHTML = `<strong>Member ID: </strong>${member.MemberId || 'N/A'}`;
                p[1].innerHTML = `<strong>Created At: </strong>${new Date(member.createdAt).toLocaleDateString() || 'N/A'}`;
                p[2].innerHTML = `<strong>Currency: </strong>${member.currency || 'N/A'}`;
                p[3].innerHTML = `<strong>Last Transaction At: </strong>${new Date(member.lastTransactionAt).toLocaleDateString() || 'N/A'}`;
                p[4].innerHTML = `<strong>Description: </strong>${member.description || 'N/A'}`;
            }
        });
    })
    .catch(error => console.error('Error:', error));
