init();

function init() {
  // 分解
  const ttl = document.querySelector(".fv-contents-title");
  const ttlHtml = ttl.innerHTML;
  const ttlSplit = ttlHtml.split("");
  ttl.innerHTML = "";
  ttlSplit.forEach((item, index) => {
    const el = document.createElement("span");
    el.innerHTML = item == " " ? "&nbsp;" : item;
    ttl.appendChild(el);
  });

  let delay = 1;

  // 背景
  const bgColor01 = document.querySelector(".fv-bg-color01");
  const bgColor02 = document.querySelector(".fv-bg-color02");
  const fish = document.querySelector(".fv-loading");
  
  gsap.to(bgColor01, {
    yPercent: 0,
  });
  gsap.to(bgColor02, {
    yPercent: 0,
  });

  gsap.to(fish, {
    duration: 0.8,
    y: 10,
    ease: Bounce.easeIn,
    repeat: 2,
  });
  gsap.to(
    fish,
    {
      duration: 0.3,
      y: -50,
      x: 10,
      autoAlpha: 0,
    },
    "2"
  );

  gsap.to(
    bgColor01,
    {
      duration: 0.2,
      borderRadius: "1.4rem 1.4rem 50rem 50rem",
    },
    "<0.2"
  );
  gsap.to(
    bgColor01,
    {
      scaleY: 0,
    },
    "<"
  );

  gsap.to(
    bgColor02,
    {
      duration: 0.2,
      borderRadius: "1.4rem 1.4rem 50rem 50rem",
    },
    "<0.2"
  );
  gsap.to(
    bgColor02,
    {
      scaleY: 0,
    },
    "<"
  );

  // タイトル一個ずつ
  delay += 1;
  document
    .querySelectorAll(".fv-contents-title span")
    .forEach((item, index) => {
      gsap.set(item, {
        y: 100,
        clipPath: "inset(0 0 100% 0)",
      });
      gsap.to(
        item,
        {
          y: 0,
          clipPath: "inset(0)",
          duration: 0.75,
          delay: delay + index * 0.04,
          ease: Elastic.easeOut.config(10, 0.75),
        },
        "+1"
      );
    });

  // テキストはいつのまに出てる感じに
  delay += 0.5;
  const text = document.querySelector(".fv-contents-text");
  gsap.set(text, {
    opacity: 0,
  });
  gsap.to(
    text,
    {
      opacity: 1,
      duration: 0.5,
      delay: delay,
      ease: Power2.easeOut,
    },
    "+1"
  );
}
