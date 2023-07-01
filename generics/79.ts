// Pick, Omit, Extract, Excude

interface PaymentPersistent1 {
    id: number;
    sum: number;
    from: string;
    to: string;
}


// Омит позволяет убрать ненужный нам тип из интерфейса или типа

type Payment1 = Omit<PaymentPersistent1, 'id'>;

// Пик наоборот берет из нашего типа только то что нам нужно
type PaymentRequisits = Pick<PaymentPersistent1, 'from' | 'to'>;

// Extract - это вытаскивание необходимых нам типов этого юнион типа
type ExtractEx = Extract<'from' | 'to' | Payment1, string>;
// Exclude исклячает типы, обратный екстракту
type ExcludeEx = Exclude<'from' | 'to' | Payment1, string>;