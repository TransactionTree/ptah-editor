;
export function galleryPreviewClick(num) {
  const TARGET_PREVIEW = 'gallery-one-preview';
  const TARGET_STAGE = 'gallery-one-stage';
  const PREVIEW_ACTIVE_CLASS = 'b-preview_active';
  var previews = document.querySelectorAll('[' + TARGET_PREVIEW + ']'),
    stages = document.querySelectorAll('[' + TARGET_STAGE + ']');

  if (previews.length === 0) {
    return;
  }

  function clickPreview(el) {
    var index = el.getAttribute('data-index'),
      target = el.getAttribute(TARGET_PREVIEW);

    previewReset(previews, index);

    [].forEach.call(stages, function (el, i) {
      if (i == index) {
        el.classList.add(target);
      } else if (el.classList.contains(target)) {
        el.classList.remove(target);
      }
    });

  }

  function previewsFor(items) {
    [].forEach.call(items, function (el, i) {
      el.onclick = function (e) {
        clickPreview(el);
      };
      if (el.classList.contains(PREVIEW_ACTIVE_CLASS)) {
        clickPreview(el);
      } else if (i == num) {
        clickPreview(el);
      }
    });
  }

  function previewReset(items, index) {
    [].forEach.call(items, function (el, i) {
      if (i == index && el.classList.contains(PREVIEW_ACTIVE_CLASS)) {
        return;
      }

      if (i == index) {
        el.classList.add(PREVIEW_ACTIVE_CLASS);
      } else if (el.classList.contains(PREVIEW_ACTIVE_CLASS)) {
        el.classList.remove(PREVIEW_ACTIVE_CLASS);
      }
    });
  }

  previewsFor(previews);

}

galleryPreviewClick(0);
