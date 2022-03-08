const inputUsername = document.getElementById("userName");
const formSubmit = document.getElementById("submit");
let cardAddUser = document.getElementById("container2");
const clearInfo = document.getElementById("submit2");

class Request {
  async get(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
}
let request = new Request();

tümEventler();

function tümEventler() {
  formSubmit.addEventListener("click", userNameÇekme);
  clearInfo.addEventListener("click",clearAll);
}

function userNameÇekme(e) {
  if (inputUsername.value === "") {
    alert("***Lütfen Bir kullanıcı adı giriniz!!!***");
  } else {
    request
      .get(`https://api.github.com/users/${inputUsername.value}`)
      .then((result) => {
        console.log(result);
        cardAddUser.innerHTML += `
            <div class="col">
            <div class="card bg-dark  text-white shadow p-3 mb-5 bg-dark rounded">
              <img
                src="${result.avatar_url}"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  <i class="fa-solid fa-user"></i> İsim Soyisim:
                  <span style="font-weight: 100">${result.name}</span>
                </h5>
                <h5 class="card-title">
                  <i class="fa-solid fa-file"></i> Public Repo:
                  <span style="font-weight: 100">${result.public_repos}</span>
                </h5>
                <h5 class="card-title">
                  <i class="fa-solid fa-building"></i> Şirket:
                  <span style="font-weight: 100">${result.company}</span>
                </h5>
                <button type="button" class="btn btn-primary"><a href="${result.html_url}" class = "text-white text-decoration-none">GitHub</a></button>
                <button type="button" class="btn btn-warning"><a href="${result.email}" class = "text-white text-decoration-none">Email</a></button>
                <button type="button" class="btn btn-success"><a href="${result.twitter_username}" class = "text-white text-decoration-none">Twitter</a></button>
              </div>
            </div>
          </div>
            `;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  inputUsername.value = "";

  e.preventDefault();
}

function clearAll(e) {
    window.location.reload(false)
}