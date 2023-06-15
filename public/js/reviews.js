const reviews_sec = document.querySelector(".reviews_child_sec");
let review_arts = [...reviews_sec.children];

function add_hidden_art(numOfLoops) {
  for (let i = 0; i < numOfLoops; i++) {
    let hiddenArt = document.createElement("article");
    hiddenArt.classList.add("reviewItem");
    hiddenArt.classList.add("hidden");
    reviews_sec.appendChild(hiddenArt);
  }
}

if (window.innerWidth > 1467) {
  if (review_arts.length % 2 != 0) {
    if (review_arts[review_arts.length-1].offsetWidth > (review_arts[0].offsetWidth * 2)) {
      add_hidden_art(2);
    } else if (review_arts[review_arts.length-1].offsetWidth > review_arts[0].offsetWidth) {
      add_hidden_art(1);
    }
  }
}

function more_arts_check(arts_count, multiplier) {
  if (review_arts.length > arts_count) {
    let more_arts_btn = create_new_btn();

    for (let i = arts_count; i < review_arts.length; i++) {
      review_arts[i].classList.add("none");
    }
    
    reviews_sec.insertBefore(more_arts_btn, review_arts[arts_count]);
  
    more_arts_btn.addEventListener("click", () => {
      if (review_arts.length >= arts_count * multiplier) {
        for (let i = arts_count; i < arts_count * multiplier; i++) {
          review_arts[i].classList.remove("none");
        }

        more_arts_btn.remove();
        reviews_sec.insertBefore(more_arts_btn, review_arts[arts_count * multiplier]);

        multiplier++;
      } else {
        for (let i = arts_count; i < review_arts.length; i++) {
          review_arts[i].classList.remove("none");
          more_arts_btn.remove();
        }
      }
    })
  } else {
    return;
  }
}
more_arts_check(4, 2);

function create_new_btn() {
  let more_arts_btn = document.createElement("button");
  more_arts_btn.classList.add("more_reviews_btn");
  more_arts_btn.classList.add("primar_btn");
  more_arts_btn.style.width = (review_arts[0].offsetWidth * 2)+"px";
  more_arts_btn.style.height = (review_arts[0].offsetHeight / 2)+"px";

  let more_arts_link = document.createElement("a");
  more_arts_link.classList.add("more_arts_link");
  more_arts_link.innerText = "More reviews";

  more_arts_btn.appendChild(more_arts_link);

  return more_arts_btn;
}
