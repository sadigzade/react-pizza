import { useState, useRef, useEffect, memo, FC } from "react";
import { SortPropertyEnum, TSort } from "../../services/types/data";
import { useDispatch } from "../../hooks/useDispatch";
import { setSort } from "../../services/actions/filter";

type SortPopupProps = {
  value: TSort;
};

export const list: TSort[] = [
  { name: "популярности", sortProperty: SortPropertyEnum.RATING },
  { name: "цене", sortProperty: SortPropertyEnum.PRICE },
  { name: "алфавиту", sortProperty: SortPropertyEnum.TITLE },
];

const SortPopup: FC<SortPopupProps> = memo(({ value }) => {
  const dispatch = useDispatch();
  const sortEl = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  const onClickListItem = (sort: TSort) => {
    dispatch(setSort(sort));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!sortEl.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortEl} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка&nbsp;по:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                className={value.sortProperty === obj.sortProperty ? "active" : ""}
                onClick={() => onClickListItem(obj)}
                key={index}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;
