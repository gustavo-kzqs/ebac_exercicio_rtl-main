import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar dois comentários', () => {
        render(<PostComment/>);
        const textarea = screen.getByTestId('comment-textarea')
        const form = screen.getByTestId('comment-form')
    
        fireEvent.change(textarea, {target: { value: 'Comentario 1 teste'}});
        fireEvent.submit(form);
    
        fireEvent.change(textarea, {target: { value: 'Comentario 2 teste'}});
        fireEvent.submit(form);
    
        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});
//Verificar no doc o ID dos componentes para concluir a resolução.
//Verificar o index.tsx