namespace TodoApi.DTOs;

public class TodoCreateDto
{
    public string Title { get; set; } = string.Empty;
    public bool IsComplete { get; set; } = false;
}